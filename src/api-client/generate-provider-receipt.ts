import { ZKOperator } from '@reclaimprotocol/circom-chacha20'
import { TLSConnectionOptions } from '@reclaimprotocol/tls'
import { Logger } from 'pino'
import { DEFAULT_PORT } from '../config'
import { InitialiseSessionRequest, ReclaimWitnessClient } from '../proto/api'
import { ProviderName, ProviderParams, providers, ProviderSecretParams } from '../providers'
import { makeHttpResponseParser } from '../utils/http-parser'
import MAIN_LOGGER from '../utils/logger'
import { makeAPITLSClient } from './make-api-tls-client'

export interface GenerateProviderReceiptOptions<N extends ProviderName> {
	/** name of the provider to generate signed receipt for */
	name: N
	/**
	 * secrets that are used to make the API request;
	 * not included in the receipt & cannot be viewed by anyone
	 * outside this client
	 */
	secretParams: ProviderSecretParams<N>
	params: ProviderParams<N>
	requestData?: Partial<InitialiseSessionRequest>
	client: ReclaimWitnessClient
	additionalConnectOpts?: TLSConnectionOptions
	logger?: Logger
	zkOperator?: ZKOperator
}

export async function generateProviderReceipt<Name extends ProviderName>({
	name,
	secretParams,
	params,
	client,
	requestData,
	additionalConnectOpts,
	logger,
	zkOperator,
}: GenerateProviderReceiptOptions<Name>) {
	logger = logger || MAIN_LOGGER
	const provider = providers[name]

	const hostPort = typeof provider.hostPort === 'function'
		// @ts-ignore
		? provider.hostPort(params)
		: provider.hostPort

	const [host, port] = hostPort.split(':')

	additionalConnectOpts = additionalConnectOpts || { }
	if(provider.additionalClientOptions?.rootCAs) {
		additionalConnectOpts.rootCAs = [
			...(additionalConnectOpts.rootCAs || [ ]),
			...provider.additionalClientOptions.rootCAs,
		]
	}

	const apiClient = makeAPITLSClient({
		host,
		port: port ? +port : DEFAULT_PORT,
		request: requestData,
		client,
		logger,
		additionalConnectOpts,
		zkOperator,
		redactResponse:
			provider.getResponseRedactions
				? res => {
					// @ts-ignore
					return provider.getResponseRedactions!(res, params)
				}
				: undefined
	})
	const resParser = makeHttpResponseParser()

	let endedHttpRequest: ((err?: Error) => void) | undefined

	apiClient.handleDataFromServer(data => {
		resParser.onChunk(data)
		if(resParser.res.complete) {
			process.nextTick(() => {
				endedHttpRequest?.()
			})
		}
	})

	apiClient.onTlsSessionEnd((err) => {
		const level = err ? 'error' : 'debug'
		logger?.[level]({ err }, 'tls session ended')
		endedHttpRequest?.(err)
		try {
			resParser.streamEnded()
		} catch{ }
	})

	const request = provider.createRequest(
		// @ts-ignore
		secretParams,
		params
	)

	logger.debug(
		{ redactions: request.redactions.length },
		'generated request'
	)

	const waitForRequestEnd = new Promise<void>(
		(resolve, reject) => {
			endedHttpRequest = err => (
				err ? reject(err) : resolve()
			)
		}
	)

	await apiClient.connect()
	await apiClient.write(request.data, request.redactions)

	logger.info('wrote request to server')

	await waitForRequestEnd

	const res = await apiClient.finish()

	logger.info({ claimData: res.claimData }, 'finished request')

	return res
}