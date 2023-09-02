/**
 * Mastodon user account
 */

import { gunzipSync } from 'zlib'
import { DEFAULT_PORT } from '../../config'
import { Provider } from '../../types'
import { getCompleteHttpResponseFromTranscript, getHttpRequestHeadersFromTranscript } from '../../utils/http-parser'

type MastodonUserParams = {
	username: string
}

type MastodonUserSecretParams = {
	cookieStr: string
}

// where to send the HTTP request
const HOST = 'mastodon.social'
const HOSTPORT = `${HOST}:${DEFAULT_PORT}`

// what API to call
const METHOD = 'GET'
const URL = '/home'

const mastodonUser: Provider<MastodonUserParams, MastodonUserSecretParams> = {
	hostPort: HOSTPORT,
	areValidParams(params): params is MastodonUserParams {
		return typeof params.username === 'string'
	},
	createRequest({ cookieStr }) {
		// serialise the HTTP request
		const url = URL
		const strRequest = [
			`${METHOD} ${url} HTTP/1.1`,
			'Host: ' + HOST,
			`cookie: ${cookieStr}`,
			'accept: text/html',
			'user-agent: reclaim/1.0.0',
			'Content-Length: 0',
			'Connection: close',
			'\r\n'
		].join('\r\n')

		// find the token and redact it
		const data = Buffer.from(strRequest)
		const tokenStartIndex = data.indexOf(cookieStr)

		return {
			data,
			// anything that should be redacted from the transcript
			// should be added to this array
			redactions: [
				{
					fromIndex: tokenStartIndex,
					toIndex: tokenStartIndex + cookieStr.length
				}
			]
		}
	},
	assertValidProviderReceipt(receipt, { username }) {
		// ensure the request was sent to the right place
		if(receipt.hostPort !== HOSTPORT) {
			throw new Error(`Invalid hostPort: ${receipt.hostPort}`)
		}

		// parse the HTTP request & check
		// the method, URL, headers, etc. match what we expect
		const req = getHttpRequestHeadersFromTranscript(receipt.transcript)
		if(req.method !== METHOD.toLowerCase()) {
			throw new Error(`Invalid method: ${req.method}`)
		}

		if(!req.url.startsWith(URL)) {
			throw new Error(`Invalid URL: ${req.url}`)
		}

		// we ensure the connection header was sent as "close"
		// this is done to avoid any possible malicious request
		// that contains multiple requests, but via redactions
		// is spoofed as a single request
		if(req.headers['connection'] !== 'close') {
			throw new Error('Invalid connection header')
		}

		const res = getCompleteHttpResponseFromTranscript(
			receipt.transcript
		)

		if(!res.headers['content-type']?.startsWith('text/html')) {
			throw new Error(`Invalid content-type: ${res.headers['content-type']}`)
		}

		let html: string
		if(res.headers['content-encoding'] === 'gzip') {
			const buf = Buffer.from(res.body)
			html = gunzipSync(buf).toString()
		} else {
			html = res.body.toString()
		}

		const reqMatch = `"username":"${username}"`

		if(!html.includes(reqMatch)) {
			throw new Error('Username invalid')
		}
	},
}

export default mastodonUser
