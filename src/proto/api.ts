/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "reclaim_witness";

export enum TranscriptMessageSenderType {
  TRANSCRIPT_MESSAGE_SENDER_TYPE_UNKNOWN = 0,
  TRANSCRIPT_MESSAGE_SENDER_TYPE_CLIENT = 1,
  TRANSCRIPT_MESSAGE_SENDER_TYPE_SERVER = 2,
  UNRECOGNIZED = -1,
}

export function transcriptMessageSenderTypeFromJSON(object: any): TranscriptMessageSenderType {
  switch (object) {
    case 0:
    case "TRANSCRIPT_MESSAGE_SENDER_TYPE_UNKNOWN":
      return TranscriptMessageSenderType.TRANSCRIPT_MESSAGE_SENDER_TYPE_UNKNOWN;
    case 1:
    case "TRANSCRIPT_MESSAGE_SENDER_TYPE_CLIENT":
      return TranscriptMessageSenderType.TRANSCRIPT_MESSAGE_SENDER_TYPE_CLIENT;
    case 2:
    case "TRANSCRIPT_MESSAGE_SENDER_TYPE_SERVER":
      return TranscriptMessageSenderType.TRANSCRIPT_MESSAGE_SENDER_TYPE_SERVER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TranscriptMessageSenderType.UNRECOGNIZED;
  }
}

export function transcriptMessageSenderTypeToJSON(object: TranscriptMessageSenderType): string {
  switch (object) {
    case TranscriptMessageSenderType.TRANSCRIPT_MESSAGE_SENDER_TYPE_UNKNOWN:
      return "TRANSCRIPT_MESSAGE_SENDER_TYPE_UNKNOWN";
    case TranscriptMessageSenderType.TRANSCRIPT_MESSAGE_SENDER_TYPE_CLIENT:
      return "TRANSCRIPT_MESSAGE_SENDER_TYPE_CLIENT";
    case TranscriptMessageSenderType.TRANSCRIPT_MESSAGE_SENDER_TYPE_SERVER:
      return "TRANSCRIPT_MESSAGE_SENDER_TYPE_SERVER";
    case TranscriptMessageSenderType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum TlsCipherSuiteType {
  TLS_CIPHER_SUITE_TYPE_UNKNOWN = 0,
  TLS_CIPHER_SUITE_TYPE_AES_128_GCM_SHA256 = 1,
  TLS_CIPHER_SUITE_TYPE_AES_256_GCM_SHA384 = 2,
  TLS_CIPHER_SUITE_TYPE_CHACHA20_POLY1305_SHA256 = 3,
  UNRECOGNIZED = -1,
}

export function tlsCipherSuiteTypeFromJSON(object: any): TlsCipherSuiteType {
  switch (object) {
    case 0:
    case "TLS_CIPHER_SUITE_TYPE_UNKNOWN":
      return TlsCipherSuiteType.TLS_CIPHER_SUITE_TYPE_UNKNOWN;
    case 1:
    case "TLS_CIPHER_SUITE_TYPE_AES_128_GCM_SHA256":
      return TlsCipherSuiteType.TLS_CIPHER_SUITE_TYPE_AES_128_GCM_SHA256;
    case 2:
    case "TLS_CIPHER_SUITE_TYPE_AES_256_GCM_SHA384":
      return TlsCipherSuiteType.TLS_CIPHER_SUITE_TYPE_AES_256_GCM_SHA384;
    case 3:
    case "TLS_CIPHER_SUITE_TYPE_CHACHA20_POLY1305_SHA256":
      return TlsCipherSuiteType.TLS_CIPHER_SUITE_TYPE_CHACHA20_POLY1305_SHA256;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TlsCipherSuiteType.UNRECOGNIZED;
  }
}

export function tlsCipherSuiteTypeToJSON(object: TlsCipherSuiteType): string {
  switch (object) {
    case TlsCipherSuiteType.TLS_CIPHER_SUITE_TYPE_UNKNOWN:
      return "TLS_CIPHER_SUITE_TYPE_UNKNOWN";
    case TlsCipherSuiteType.TLS_CIPHER_SUITE_TYPE_AES_128_GCM_SHA256:
      return "TLS_CIPHER_SUITE_TYPE_AES_128_GCM_SHA256";
    case TlsCipherSuiteType.TLS_CIPHER_SUITE_TYPE_AES_256_GCM_SHA384:
      return "TLS_CIPHER_SUITE_TYPE_AES_256_GCM_SHA384";
    case TlsCipherSuiteType.TLS_CIPHER_SUITE_TYPE_CHACHA20_POLY1305_SHA256:
      return "TLS_CIPHER_SUITE_TYPE_CHACHA20_POLY1305_SHA256";
    case TlsCipherSuiteType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum ServiceSignatureType {
  SERVICE_SIGNATURE_TYPE_UNKNOWN = 0,
  /**
   * SERVICE_SIGNATURE_TYPE_ETH - ETH keys & signature
   * keys: secp256k1
   * signature: ethereum flavor of ECDSA (https://goethereumbook.org/signature-generate/)
   */
  SERVICE_SIGNATURE_TYPE_ETH = 1,
  UNRECOGNIZED = -1,
}

export function serviceSignatureTypeFromJSON(object: any): ServiceSignatureType {
  switch (object) {
    case 0:
    case "SERVICE_SIGNATURE_TYPE_UNKNOWN":
      return ServiceSignatureType.SERVICE_SIGNATURE_TYPE_UNKNOWN;
    case 1:
    case "SERVICE_SIGNATURE_TYPE_ETH":
      return ServiceSignatureType.SERVICE_SIGNATURE_TYPE_ETH;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ServiceSignatureType.UNRECOGNIZED;
  }
}

export function serviceSignatureTypeToJSON(object: ServiceSignatureType): string {
  switch (object) {
    case ServiceSignatureType.SERVICE_SIGNATURE_TYPE_UNKNOWN:
      return "SERVICE_SIGNATURE_TYPE_UNKNOWN";
    case ServiceSignatureType.SERVICE_SIGNATURE_TYPE_ETH:
      return "SERVICE_SIGNATURE_TYPE_ETH";
    case ServiceSignatureType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum WitnessVersion {
  WITNESS_VERSION_UNKNOWN = 0,
  WITNESS_VERSION_1_0_0 = 1,
  WITNESS_VERSION_1_1_0 = 2,
  UNRECOGNIZED = -1,
}

export function witnessVersionFromJSON(object: any): WitnessVersion {
  switch (object) {
    case 0:
    case "WITNESS_VERSION_UNKNOWN":
      return WitnessVersion.WITNESS_VERSION_UNKNOWN;
    case 1:
    case "WITNESS_VERSION_1_0_0":
      return WitnessVersion.WITNESS_VERSION_1_0_0;
    case 2:
    case "WITNESS_VERSION_1_1_0":
      return WitnessVersion.WITNESS_VERSION_1_1_0;
    case -1:
    case "UNRECOGNIZED":
    default:
      return WitnessVersion.UNRECOGNIZED;
  }
}

export function witnessVersionToJSON(object: WitnessVersion): string {
  switch (object) {
    case WitnessVersion.WITNESS_VERSION_UNKNOWN:
      return "WITNESS_VERSION_UNKNOWN";
    case WitnessVersion.WITNESS_VERSION_1_0_0:
      return "WITNESS_VERSION_1_0_0";
    case WitnessVersion.WITNESS_VERSION_1_1_0:
      return "WITNESS_VERSION_1_1_0";
    case WitnessVersion.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface TLSPacket {
  recordHeader: Uint8Array;
  content: Uint8Array;
  authenticationTag: Uint8Array;
}

export interface TranscriptMessage {
  senderType: TranscriptMessageSenderType;
  redacted: boolean;
  /** if redacted, message is empty */
  message: Uint8Array;
}

export interface ProviderClaimData {
  provider: string;
  parameters: string;
  owner: string;
  timestampS: number;
  context: string;
  /**
   * identifier of the claim;
   * Hash of (provider, parameters, context)
   *
   * This is different from the claimId returned
   * from the smart contract
   */
  identifier: string;
  epoch: number;
}

export interface ProviderClaimInfo {
  provider: string;
  parameters: string;
  context: string;
}

export interface TLSReceipt {
  /**
   * host concatenated with port with a colon (:)
   * eg. localhost:443
   */
  hostPort: string;
  /** unix timestamp in seconds of the receipt completion */
  timestampS: number;
  /**
   * the transcript between the server & client
   * in the order they were received
   */
  transcript: TranscriptMessage[];
  /** sign(proto(TLSReceipt w/o signature)) */
  signature: Uint8Array;
}

export interface GetVerifierPublicKeyRequest {
}

export interface GetVerifierPublicKeyResponse {
  /** public key of the verifier */
  publicKey: Uint8Array;
  /** type of signature being used by the service */
  signatureType: ServiceSignatureType;
}

export interface InitialiseSessionRequest {
  /**
   * Use if you'd just like a signed receipt
   * for some custom purpose
   */
  receiptGenerationRequest:
    | InitialiseSessionRequest_ReceiptGenerationRequest
    | undefined;
  /** beacon based version of ProviderClaimRequest */
  beaconBasedProviderClaimRequest: InitialiseSessionRequest_BeaconBasedProviderClaimRequest | undefined;
}

export interface InitialiseSessionRequest_ReceiptGenerationRequest {
  host: string;
  port: number;
}

export interface InitialiseSessionRequest_BeaconBasedProviderClaimRequest {
  /** Epoch in which claim is being created */
  epoch: number;
  /**
   * When the claim is being created.
   * Cannot be more than 10 minutes in the past
   * or in the future at all
   */
  timestampS: number;
  /** private information to sign */
  info:
    | ProviderClaimInfo
    | undefined;
  /** proof of who is making the claim */
  ownerProof: InitialiseSessionRequest_ClaimOwner | undefined;
}

export interface InitialiseSessionRequest_ClaimOwner {
  /** address of the owner */
  address: string;
  /**
   * signature of proto serialised epoch and info
   * with the private key
   */
  signature: Uint8Array;
}

export interface InitialiseSessionResponse {
  /** opaque ID assigned to the client for this request */
  sessionId: string;
}

export interface PushToSessionRequest {
  /** opaque ID assigned to the client for this request */
  sessionId: string;
  /** messages to push */
  messages: TLSPacket[];
}

/** empty response */
export interface PushToSessionResponse {
}

export interface PullFromSessionRequest {
  /** opaque ID assigned to the client for this request */
  sessionId: string;
  /** indicate the version of the client */
  version: WitnessVersion;
}

export interface PullFromSessionResponse {
  /** messages pulled from the server */
  message: TLSPacket | undefined;
}

export interface CancelSessionRequest {
  sessionId: string;
}

/** empty response */
export interface CancelSessionResponse {
}

export interface FinaliseSessionRequest {
  sessionId: string;
  revealBlocks: FinaliseSessionRequest_Block[];
  cipherSuite: TlsCipherSuiteType;
}

export interface FinaliseSessionRequest_Block {
  /** auth tag of the block to reveal */
  authTag: Uint8Array;
  /**
   * key & IV for direct reveal;
   * kept for backwards compatibility
   */
  key: Uint8Array;
  iv: Uint8Array;
  directReveal: FinaliseSessionRequest_BlockRevealDirect | undefined;
  zkReveal: FinaliseSessionRequest_BlockRevealZk | undefined;
}

/**
 * direct reveal of the block via the key & IV
 * cipher (aes, chacha) for decryption
 * selected based on `cipherSuite`
 * in `FinaliseSessionRequest`
 */
export interface FinaliseSessionRequest_BlockRevealDirect {
  /** key for the block */
  key: Uint8Array;
  /** IV for the block */
  iv: Uint8Array;
}

/** partially or fully reveal the block via a zk proof */
export interface FinaliseSessionRequest_BlockRevealZk {
  proofs: FinaliseSessionRequest_ZKProof[];
}

export interface FinaliseSessionRequest_ZKProof {
  /** JSON encoded snarkJS proof */
  proofJson: string;
  /** the decrypted ciphertext as output by the ZK proof */
  decryptedRedactedCiphertext: Uint8Array;
  /** the plaintext that is fully or partially revealed */
  redactedPlaintext: Uint8Array;
  /**
   * start of this specific ChaCha block
   * in the redactedPlaintext
   */
  startIdx: number;
}

export interface FinaliseSessionResponse {
  receipt: TLSReceipt | undefined;
  claimData:
    | ProviderClaimData
    | undefined;
  /** signature of `stringifyProviderClaimData(claimData)` */
  signature: Uint8Array;
}

function createBaseTLSPacket(): TLSPacket {
  return { recordHeader: new Uint8Array(0), content: new Uint8Array(0), authenticationTag: new Uint8Array(0) };
}

export const TLSPacket = {
  encode(message: TLSPacket, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.recordHeader.length !== 0) {
      writer.uint32(10).bytes(message.recordHeader);
    }
    if (message.content.length !== 0) {
      writer.uint32(18).bytes(message.content);
    }
    if (message.authenticationTag.length !== 0) {
      writer.uint32(26).bytes(message.authenticationTag);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TLSPacket {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTLSPacket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.recordHeader = reader.bytes();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.content = reader.bytes();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.authenticationTag = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TLSPacket {
    return {
      recordHeader: isSet(object.recordHeader) ? bytesFromBase64(object.recordHeader) : new Uint8Array(0),
      content: isSet(object.content) ? bytesFromBase64(object.content) : new Uint8Array(0),
      authenticationTag: isSet(object.authenticationTag)
        ? bytesFromBase64(object.authenticationTag)
        : new Uint8Array(0),
    };
  },

  toJSON(message: TLSPacket): unknown {
    const obj: any = {};
    message.recordHeader !== undefined &&
      (obj.recordHeader = base64FromBytes(
        message.recordHeader !== undefined ? message.recordHeader : new Uint8Array(0),
      ));
    message.content !== undefined &&
      (obj.content = base64FromBytes(message.content !== undefined ? message.content : new Uint8Array(0)));
    message.authenticationTag !== undefined &&
      (obj.authenticationTag = base64FromBytes(
        message.authenticationTag !== undefined ? message.authenticationTag : new Uint8Array(0),
      ));
    return obj;
  },

  create(base?: DeepPartial<TLSPacket>): TLSPacket {
    return TLSPacket.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<TLSPacket>): TLSPacket {
    const message = createBaseTLSPacket();
    message.recordHeader = object.recordHeader ?? new Uint8Array(0);
    message.content = object.content ?? new Uint8Array(0);
    message.authenticationTag = object.authenticationTag ?? new Uint8Array(0);
    return message;
  },
};

function createBaseTranscriptMessage(): TranscriptMessage {
  return { senderType: 0, redacted: false, message: new Uint8Array(0) };
}

export const TranscriptMessage = {
  encode(message: TranscriptMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.senderType !== 0) {
      writer.uint32(8).int32(message.senderType);
    }
    if (message.redacted === true) {
      writer.uint32(16).bool(message.redacted);
    }
    if (message.message.length !== 0) {
      writer.uint32(26).bytes(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TranscriptMessage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTranscriptMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.senderType = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.redacted = reader.bool();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.message = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TranscriptMessage {
    return {
      senderType: isSet(object.senderType) ? transcriptMessageSenderTypeFromJSON(object.senderType) : 0,
      redacted: isSet(object.redacted) ? Boolean(object.redacted) : false,
      message: isSet(object.message) ? bytesFromBase64(object.message) : new Uint8Array(0),
    };
  },

  toJSON(message: TranscriptMessage): unknown {
    const obj: any = {};
    message.senderType !== undefined && (obj.senderType = transcriptMessageSenderTypeToJSON(message.senderType));
    message.redacted !== undefined && (obj.redacted = message.redacted);
    message.message !== undefined &&
      (obj.message = base64FromBytes(message.message !== undefined ? message.message : new Uint8Array(0)));
    return obj;
  },

  create(base?: DeepPartial<TranscriptMessage>): TranscriptMessage {
    return TranscriptMessage.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<TranscriptMessage>): TranscriptMessage {
    const message = createBaseTranscriptMessage();
    message.senderType = object.senderType ?? 0;
    message.redacted = object.redacted ?? false;
    message.message = object.message ?? new Uint8Array(0);
    return message;
  },
};

function createBaseProviderClaimData(): ProviderClaimData {
  return { provider: "", parameters: "", owner: "", timestampS: 0, context: "", identifier: "", epoch: 0 };
}

export const ProviderClaimData = {
  encode(message: ProviderClaimData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.provider !== "") {
      writer.uint32(10).string(message.provider);
    }
    if (message.parameters !== "") {
      writer.uint32(18).string(message.parameters);
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    if (message.timestampS !== 0) {
      writer.uint32(32).uint32(message.timestampS);
    }
    if (message.context !== "") {
      writer.uint32(50).string(message.context);
    }
    if (message.identifier !== "") {
      writer.uint32(66).string(message.identifier);
    }
    if (message.epoch !== 0) {
      writer.uint32(72).uint32(message.epoch);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProviderClaimData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProviderClaimData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.provider = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.parameters = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.owner = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.timestampS = reader.uint32();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.context = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.identifier = reader.string();
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.epoch = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProviderClaimData {
    return {
      provider: isSet(object.provider) ? String(object.provider) : "",
      parameters: isSet(object.parameters) ? String(object.parameters) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      timestampS: isSet(object.timestampS) ? Number(object.timestampS) : 0,
      context: isSet(object.context) ? String(object.context) : "",
      identifier: isSet(object.identifier) ? String(object.identifier) : "",
      epoch: isSet(object.epoch) ? Number(object.epoch) : 0,
    };
  },

  toJSON(message: ProviderClaimData): unknown {
    const obj: any = {};
    message.provider !== undefined && (obj.provider = message.provider);
    message.parameters !== undefined && (obj.parameters = message.parameters);
    message.owner !== undefined && (obj.owner = message.owner);
    message.timestampS !== undefined && (obj.timestampS = Math.round(message.timestampS));
    message.context !== undefined && (obj.context = message.context);
    message.identifier !== undefined && (obj.identifier = message.identifier);
    message.epoch !== undefined && (obj.epoch = Math.round(message.epoch));
    return obj;
  },

  create(base?: DeepPartial<ProviderClaimData>): ProviderClaimData {
    return ProviderClaimData.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ProviderClaimData>): ProviderClaimData {
    const message = createBaseProviderClaimData();
    message.provider = object.provider ?? "";
    message.parameters = object.parameters ?? "";
    message.owner = object.owner ?? "";
    message.timestampS = object.timestampS ?? 0;
    message.context = object.context ?? "";
    message.identifier = object.identifier ?? "";
    message.epoch = object.epoch ?? 0;
    return message;
  },
};

function createBaseProviderClaimInfo(): ProviderClaimInfo {
  return { provider: "", parameters: "", context: "" };
}

export const ProviderClaimInfo = {
  encode(message: ProviderClaimInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.provider !== "") {
      writer.uint32(10).string(message.provider);
    }
    if (message.parameters !== "") {
      writer.uint32(18).string(message.parameters);
    }
    if (message.context !== "") {
      writer.uint32(50).string(message.context);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProviderClaimInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProviderClaimInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.provider = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.parameters = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.context = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProviderClaimInfo {
    return {
      provider: isSet(object.provider) ? String(object.provider) : "",
      parameters: isSet(object.parameters) ? String(object.parameters) : "",
      context: isSet(object.context) ? String(object.context) : "",
    };
  },

  toJSON(message: ProviderClaimInfo): unknown {
    const obj: any = {};
    message.provider !== undefined && (obj.provider = message.provider);
    message.parameters !== undefined && (obj.parameters = message.parameters);
    message.context !== undefined && (obj.context = message.context);
    return obj;
  },

  create(base?: DeepPartial<ProviderClaimInfo>): ProviderClaimInfo {
    return ProviderClaimInfo.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ProviderClaimInfo>): ProviderClaimInfo {
    const message = createBaseProviderClaimInfo();
    message.provider = object.provider ?? "";
    message.parameters = object.parameters ?? "";
    message.context = object.context ?? "";
    return message;
  },
};

function createBaseTLSReceipt(): TLSReceipt {
  return { hostPort: "", timestampS: 0, transcript: [], signature: new Uint8Array(0) };
}

export const TLSReceipt = {
  encode(message: TLSReceipt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hostPort !== "") {
      writer.uint32(10).string(message.hostPort);
    }
    if (message.timestampS !== 0) {
      writer.uint32(16).uint32(message.timestampS);
    }
    for (const v of message.transcript) {
      TranscriptMessage.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.signature.length !== 0) {
      writer.uint32(34).bytes(message.signature);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TLSReceipt {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTLSReceipt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.hostPort = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.timestampS = reader.uint32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.transcript.push(TranscriptMessage.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.signature = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TLSReceipt {
    return {
      hostPort: isSet(object.hostPort) ? String(object.hostPort) : "",
      timestampS: isSet(object.timestampS) ? Number(object.timestampS) : 0,
      transcript: Array.isArray(object?.transcript)
        ? object.transcript.map((e: any) => TranscriptMessage.fromJSON(e))
        : [],
      signature: isSet(object.signature) ? bytesFromBase64(object.signature) : new Uint8Array(0),
    };
  },

  toJSON(message: TLSReceipt): unknown {
    const obj: any = {};
    message.hostPort !== undefined && (obj.hostPort = message.hostPort);
    message.timestampS !== undefined && (obj.timestampS = Math.round(message.timestampS));
    if (message.transcript) {
      obj.transcript = message.transcript.map((e) => e ? TranscriptMessage.toJSON(e) : undefined);
    } else {
      obj.transcript = [];
    }
    message.signature !== undefined &&
      (obj.signature = base64FromBytes(message.signature !== undefined ? message.signature : new Uint8Array(0)));
    return obj;
  },

  create(base?: DeepPartial<TLSReceipt>): TLSReceipt {
    return TLSReceipt.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<TLSReceipt>): TLSReceipt {
    const message = createBaseTLSReceipt();
    message.hostPort = object.hostPort ?? "";
    message.timestampS = object.timestampS ?? 0;
    message.transcript = object.transcript?.map((e) => TranscriptMessage.fromPartial(e)) || [];
    message.signature = object.signature ?? new Uint8Array(0);
    return message;
  },
};

function createBaseGetVerifierPublicKeyRequest(): GetVerifierPublicKeyRequest {
  return {};
}

export const GetVerifierPublicKeyRequest = {
  encode(_: GetVerifierPublicKeyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetVerifierPublicKeyRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetVerifierPublicKeyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): GetVerifierPublicKeyRequest {
    return {};
  },

  toJSON(_: GetVerifierPublicKeyRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<GetVerifierPublicKeyRequest>): GetVerifierPublicKeyRequest {
    return GetVerifierPublicKeyRequest.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<GetVerifierPublicKeyRequest>): GetVerifierPublicKeyRequest {
    const message = createBaseGetVerifierPublicKeyRequest();
    return message;
  },
};

function createBaseGetVerifierPublicKeyResponse(): GetVerifierPublicKeyResponse {
  return { publicKey: new Uint8Array(0), signatureType: 0 };
}

export const GetVerifierPublicKeyResponse = {
  encode(message: GetVerifierPublicKeyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.publicKey.length !== 0) {
      writer.uint32(10).bytes(message.publicKey);
    }
    if (message.signatureType !== 0) {
      writer.uint32(16).int32(message.signatureType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetVerifierPublicKeyResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetVerifierPublicKeyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.publicKey = reader.bytes();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.signatureType = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetVerifierPublicKeyResponse {
    return {
      publicKey: isSet(object.publicKey) ? bytesFromBase64(object.publicKey) : new Uint8Array(0),
      signatureType: isSet(object.signatureType) ? serviceSignatureTypeFromJSON(object.signatureType) : 0,
    };
  },

  toJSON(message: GetVerifierPublicKeyResponse): unknown {
    const obj: any = {};
    message.publicKey !== undefined &&
      (obj.publicKey = base64FromBytes(message.publicKey !== undefined ? message.publicKey : new Uint8Array(0)));
    message.signatureType !== undefined && (obj.signatureType = serviceSignatureTypeToJSON(message.signatureType));
    return obj;
  },

  create(base?: DeepPartial<GetVerifierPublicKeyResponse>): GetVerifierPublicKeyResponse {
    return GetVerifierPublicKeyResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GetVerifierPublicKeyResponse>): GetVerifierPublicKeyResponse {
    const message = createBaseGetVerifierPublicKeyResponse();
    message.publicKey = object.publicKey ?? new Uint8Array(0);
    message.signatureType = object.signatureType ?? 0;
    return message;
  },
};

function createBaseInitialiseSessionRequest(): InitialiseSessionRequest {
  return { receiptGenerationRequest: undefined, beaconBasedProviderClaimRequest: undefined };
}

export const InitialiseSessionRequest = {
  encode(message: InitialiseSessionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.receiptGenerationRequest !== undefined) {
      InitialiseSessionRequest_ReceiptGenerationRequest.encode(
        message.receiptGenerationRequest,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.beaconBasedProviderClaimRequest !== undefined) {
      InitialiseSessionRequest_BeaconBasedProviderClaimRequest.encode(
        message.beaconBasedProviderClaimRequest,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InitialiseSessionRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInitialiseSessionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.receiptGenerationRequest = InitialiseSessionRequest_ReceiptGenerationRequest.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.beaconBasedProviderClaimRequest = InitialiseSessionRequest_BeaconBasedProviderClaimRequest.decode(
            reader,
            reader.uint32(),
          );
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): InitialiseSessionRequest {
    return {
      receiptGenerationRequest: isSet(object.receiptGenerationRequest)
        ? InitialiseSessionRequest_ReceiptGenerationRequest.fromJSON(object.receiptGenerationRequest)
        : undefined,
      beaconBasedProviderClaimRequest: isSet(object.beaconBasedProviderClaimRequest)
        ? InitialiseSessionRequest_BeaconBasedProviderClaimRequest.fromJSON(object.beaconBasedProviderClaimRequest)
        : undefined,
    };
  },

  toJSON(message: InitialiseSessionRequest): unknown {
    const obj: any = {};
    message.receiptGenerationRequest !== undefined && (obj.receiptGenerationRequest = message.receiptGenerationRequest
      ? InitialiseSessionRequest_ReceiptGenerationRequest.toJSON(message.receiptGenerationRequest)
      : undefined);
    message.beaconBasedProviderClaimRequest !== undefined &&
      (obj.beaconBasedProviderClaimRequest = message.beaconBasedProviderClaimRequest
        ? InitialiseSessionRequest_BeaconBasedProviderClaimRequest.toJSON(message.beaconBasedProviderClaimRequest)
        : undefined);
    return obj;
  },

  create(base?: DeepPartial<InitialiseSessionRequest>): InitialiseSessionRequest {
    return InitialiseSessionRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<InitialiseSessionRequest>): InitialiseSessionRequest {
    const message = createBaseInitialiseSessionRequest();
    message.receiptGenerationRequest =
      (object.receiptGenerationRequest !== undefined && object.receiptGenerationRequest !== null)
        ? InitialiseSessionRequest_ReceiptGenerationRequest.fromPartial(object.receiptGenerationRequest)
        : undefined;
    message.beaconBasedProviderClaimRequest =
      (object.beaconBasedProviderClaimRequest !== undefined && object.beaconBasedProviderClaimRequest !== null)
        ? InitialiseSessionRequest_BeaconBasedProviderClaimRequest.fromPartial(object.beaconBasedProviderClaimRequest)
        : undefined;
    return message;
  },
};

function createBaseInitialiseSessionRequest_ReceiptGenerationRequest(): InitialiseSessionRequest_ReceiptGenerationRequest {
  return { host: "", port: 0 };
}

export const InitialiseSessionRequest_ReceiptGenerationRequest = {
  encode(
    message: InitialiseSessionRequest_ReceiptGenerationRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.host !== "") {
      writer.uint32(10).string(message.host);
    }
    if (message.port !== 0) {
      writer.uint32(16).uint32(message.port);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InitialiseSessionRequest_ReceiptGenerationRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInitialiseSessionRequest_ReceiptGenerationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.host = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.port = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): InitialiseSessionRequest_ReceiptGenerationRequest {
    return { host: isSet(object.host) ? String(object.host) : "", port: isSet(object.port) ? Number(object.port) : 0 };
  },

  toJSON(message: InitialiseSessionRequest_ReceiptGenerationRequest): unknown {
    const obj: any = {};
    message.host !== undefined && (obj.host = message.host);
    message.port !== undefined && (obj.port = Math.round(message.port));
    return obj;
  },

  create(
    base?: DeepPartial<InitialiseSessionRequest_ReceiptGenerationRequest>,
  ): InitialiseSessionRequest_ReceiptGenerationRequest {
    return InitialiseSessionRequest_ReceiptGenerationRequest.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<InitialiseSessionRequest_ReceiptGenerationRequest>,
  ): InitialiseSessionRequest_ReceiptGenerationRequest {
    const message = createBaseInitialiseSessionRequest_ReceiptGenerationRequest();
    message.host = object.host ?? "";
    message.port = object.port ?? 0;
    return message;
  },
};

function createBaseInitialiseSessionRequest_BeaconBasedProviderClaimRequest(): InitialiseSessionRequest_BeaconBasedProviderClaimRequest {
  return { epoch: 0, timestampS: 0, info: undefined, ownerProof: undefined };
}

export const InitialiseSessionRequest_BeaconBasedProviderClaimRequest = {
  encode(
    message: InitialiseSessionRequest_BeaconBasedProviderClaimRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.epoch !== 0) {
      writer.uint32(8).uint32(message.epoch);
    }
    if (message.timestampS !== 0) {
      writer.uint32(16).uint32(message.timestampS);
    }
    if (message.info !== undefined) {
      ProviderClaimInfo.encode(message.info, writer.uint32(26).fork()).ldelim();
    }
    if (message.ownerProof !== undefined) {
      InitialiseSessionRequest_ClaimOwner.encode(message.ownerProof, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InitialiseSessionRequest_BeaconBasedProviderClaimRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInitialiseSessionRequest_BeaconBasedProviderClaimRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.epoch = reader.uint32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.timestampS = reader.uint32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.info = ProviderClaimInfo.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.ownerProof = InitialiseSessionRequest_ClaimOwner.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): InitialiseSessionRequest_BeaconBasedProviderClaimRequest {
    return {
      epoch: isSet(object.epoch) ? Number(object.epoch) : 0,
      timestampS: isSet(object.timestampS) ? Number(object.timestampS) : 0,
      info: isSet(object.info) ? ProviderClaimInfo.fromJSON(object.info) : undefined,
      ownerProof: isSet(object.ownerProof)
        ? InitialiseSessionRequest_ClaimOwner.fromJSON(object.ownerProof)
        : undefined,
    };
  },

  toJSON(message: InitialiseSessionRequest_BeaconBasedProviderClaimRequest): unknown {
    const obj: any = {};
    message.epoch !== undefined && (obj.epoch = Math.round(message.epoch));
    message.timestampS !== undefined && (obj.timestampS = Math.round(message.timestampS));
    message.info !== undefined && (obj.info = message.info ? ProviderClaimInfo.toJSON(message.info) : undefined);
    message.ownerProof !== undefined &&
      (obj.ownerProof = message.ownerProof
        ? InitialiseSessionRequest_ClaimOwner.toJSON(message.ownerProof)
        : undefined);
    return obj;
  },

  create(
    base?: DeepPartial<InitialiseSessionRequest_BeaconBasedProviderClaimRequest>,
  ): InitialiseSessionRequest_BeaconBasedProviderClaimRequest {
    return InitialiseSessionRequest_BeaconBasedProviderClaimRequest.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<InitialiseSessionRequest_BeaconBasedProviderClaimRequest>,
  ): InitialiseSessionRequest_BeaconBasedProviderClaimRequest {
    const message = createBaseInitialiseSessionRequest_BeaconBasedProviderClaimRequest();
    message.epoch = object.epoch ?? 0;
    message.timestampS = object.timestampS ?? 0;
    message.info = (object.info !== undefined && object.info !== null)
      ? ProviderClaimInfo.fromPartial(object.info)
      : undefined;
    message.ownerProof = (object.ownerProof !== undefined && object.ownerProof !== null)
      ? InitialiseSessionRequest_ClaimOwner.fromPartial(object.ownerProof)
      : undefined;
    return message;
  },
};

function createBaseInitialiseSessionRequest_ClaimOwner(): InitialiseSessionRequest_ClaimOwner {
  return { address: "", signature: new Uint8Array(0) };
}

export const InitialiseSessionRequest_ClaimOwner = {
  encode(message: InitialiseSessionRequest_ClaimOwner, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.signature.length !== 0) {
      writer.uint32(18).bytes(message.signature);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InitialiseSessionRequest_ClaimOwner {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInitialiseSessionRequest_ClaimOwner();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.signature = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): InitialiseSessionRequest_ClaimOwner {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      signature: isSet(object.signature) ? bytesFromBase64(object.signature) : new Uint8Array(0),
    };
  },

  toJSON(message: InitialiseSessionRequest_ClaimOwner): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.signature !== undefined &&
      (obj.signature = base64FromBytes(message.signature !== undefined ? message.signature : new Uint8Array(0)));
    return obj;
  },

  create(base?: DeepPartial<InitialiseSessionRequest_ClaimOwner>): InitialiseSessionRequest_ClaimOwner {
    return InitialiseSessionRequest_ClaimOwner.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<InitialiseSessionRequest_ClaimOwner>): InitialiseSessionRequest_ClaimOwner {
    const message = createBaseInitialiseSessionRequest_ClaimOwner();
    message.address = object.address ?? "";
    message.signature = object.signature ?? new Uint8Array(0);
    return message;
  },
};

function createBaseInitialiseSessionResponse(): InitialiseSessionResponse {
  return { sessionId: "" };
}

export const InitialiseSessionResponse = {
  encode(message: InitialiseSessionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sessionId !== "") {
      writer.uint32(10).string(message.sessionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InitialiseSessionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInitialiseSessionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sessionId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): InitialiseSessionResponse {
    return { sessionId: isSet(object.sessionId) ? String(object.sessionId) : "" };
  },

  toJSON(message: InitialiseSessionResponse): unknown {
    const obj: any = {};
    message.sessionId !== undefined && (obj.sessionId = message.sessionId);
    return obj;
  },

  create(base?: DeepPartial<InitialiseSessionResponse>): InitialiseSessionResponse {
    return InitialiseSessionResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<InitialiseSessionResponse>): InitialiseSessionResponse {
    const message = createBaseInitialiseSessionResponse();
    message.sessionId = object.sessionId ?? "";
    return message;
  },
};

function createBasePushToSessionRequest(): PushToSessionRequest {
  return { sessionId: "", messages: [] };
}

export const PushToSessionRequest = {
  encode(message: PushToSessionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sessionId !== "") {
      writer.uint32(10).string(message.sessionId);
    }
    for (const v of message.messages) {
      TLSPacket.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PushToSessionRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePushToSessionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sessionId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.messages.push(TLSPacket.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PushToSessionRequest {
    return {
      sessionId: isSet(object.sessionId) ? String(object.sessionId) : "",
      messages: Array.isArray(object?.messages) ? object.messages.map((e: any) => TLSPacket.fromJSON(e)) : [],
    };
  },

  toJSON(message: PushToSessionRequest): unknown {
    const obj: any = {};
    message.sessionId !== undefined && (obj.sessionId = message.sessionId);
    if (message.messages) {
      obj.messages = message.messages.map((e) => e ? TLSPacket.toJSON(e) : undefined);
    } else {
      obj.messages = [];
    }
    return obj;
  },

  create(base?: DeepPartial<PushToSessionRequest>): PushToSessionRequest {
    return PushToSessionRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PushToSessionRequest>): PushToSessionRequest {
    const message = createBasePushToSessionRequest();
    message.sessionId = object.sessionId ?? "";
    message.messages = object.messages?.map((e) => TLSPacket.fromPartial(e)) || [];
    return message;
  },
};

function createBasePushToSessionResponse(): PushToSessionResponse {
  return {};
}

export const PushToSessionResponse = {
  encode(_: PushToSessionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PushToSessionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePushToSessionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): PushToSessionResponse {
    return {};
  },

  toJSON(_: PushToSessionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<PushToSessionResponse>): PushToSessionResponse {
    return PushToSessionResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<PushToSessionResponse>): PushToSessionResponse {
    const message = createBasePushToSessionResponse();
    return message;
  },
};

function createBasePullFromSessionRequest(): PullFromSessionRequest {
  return { sessionId: "", version: 0 };
}

export const PullFromSessionRequest = {
  encode(message: PullFromSessionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sessionId !== "") {
      writer.uint32(10).string(message.sessionId);
    }
    if (message.version !== 0) {
      writer.uint32(16).int32(message.version);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PullFromSessionRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePullFromSessionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sessionId = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.version = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PullFromSessionRequest {
    return {
      sessionId: isSet(object.sessionId) ? String(object.sessionId) : "",
      version: isSet(object.version) ? witnessVersionFromJSON(object.version) : 0,
    };
  },

  toJSON(message: PullFromSessionRequest): unknown {
    const obj: any = {};
    message.sessionId !== undefined && (obj.sessionId = message.sessionId);
    message.version !== undefined && (obj.version = witnessVersionToJSON(message.version));
    return obj;
  },

  create(base?: DeepPartial<PullFromSessionRequest>): PullFromSessionRequest {
    return PullFromSessionRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PullFromSessionRequest>): PullFromSessionRequest {
    const message = createBasePullFromSessionRequest();
    message.sessionId = object.sessionId ?? "";
    message.version = object.version ?? 0;
    return message;
  },
};

function createBasePullFromSessionResponse(): PullFromSessionResponse {
  return { message: undefined };
}

export const PullFromSessionResponse = {
  encode(message: PullFromSessionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== undefined) {
      TLSPacket.encode(message.message, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PullFromSessionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePullFromSessionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.message = TLSPacket.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PullFromSessionResponse {
    return { message: isSet(object.message) ? TLSPacket.fromJSON(object.message) : undefined };
  },

  toJSON(message: PullFromSessionResponse): unknown {
    const obj: any = {};
    message.message !== undefined && (obj.message = message.message ? TLSPacket.toJSON(message.message) : undefined);
    return obj;
  },

  create(base?: DeepPartial<PullFromSessionResponse>): PullFromSessionResponse {
    return PullFromSessionResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PullFromSessionResponse>): PullFromSessionResponse {
    const message = createBasePullFromSessionResponse();
    message.message = (object.message !== undefined && object.message !== null)
      ? TLSPacket.fromPartial(object.message)
      : undefined;
    return message;
  },
};

function createBaseCancelSessionRequest(): CancelSessionRequest {
  return { sessionId: "" };
}

export const CancelSessionRequest = {
  encode(message: CancelSessionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sessionId !== "") {
      writer.uint32(10).string(message.sessionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CancelSessionRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCancelSessionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sessionId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CancelSessionRequest {
    return { sessionId: isSet(object.sessionId) ? String(object.sessionId) : "" };
  },

  toJSON(message: CancelSessionRequest): unknown {
    const obj: any = {};
    message.sessionId !== undefined && (obj.sessionId = message.sessionId);
    return obj;
  },

  create(base?: DeepPartial<CancelSessionRequest>): CancelSessionRequest {
    return CancelSessionRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CancelSessionRequest>): CancelSessionRequest {
    const message = createBaseCancelSessionRequest();
    message.sessionId = object.sessionId ?? "";
    return message;
  },
};

function createBaseCancelSessionResponse(): CancelSessionResponse {
  return {};
}

export const CancelSessionResponse = {
  encode(_: CancelSessionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CancelSessionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCancelSessionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): CancelSessionResponse {
    return {};
  },

  toJSON(_: CancelSessionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<CancelSessionResponse>): CancelSessionResponse {
    return CancelSessionResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<CancelSessionResponse>): CancelSessionResponse {
    const message = createBaseCancelSessionResponse();
    return message;
  },
};

function createBaseFinaliseSessionRequest(): FinaliseSessionRequest {
  return { sessionId: "", revealBlocks: [], cipherSuite: 0 };
}

export const FinaliseSessionRequest = {
  encode(message: FinaliseSessionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sessionId !== "") {
      writer.uint32(10).string(message.sessionId);
    }
    for (const v of message.revealBlocks) {
      FinaliseSessionRequest_Block.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.cipherSuite !== 0) {
      writer.uint32(24).int32(message.cipherSuite);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FinaliseSessionRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFinaliseSessionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sessionId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.revealBlocks.push(FinaliseSessionRequest_Block.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.cipherSuite = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FinaliseSessionRequest {
    return {
      sessionId: isSet(object.sessionId) ? String(object.sessionId) : "",
      revealBlocks: Array.isArray(object?.revealBlocks)
        ? object.revealBlocks.map((e: any) => FinaliseSessionRequest_Block.fromJSON(e))
        : [],
      cipherSuite: isSet(object.cipherSuite) ? tlsCipherSuiteTypeFromJSON(object.cipherSuite) : 0,
    };
  },

  toJSON(message: FinaliseSessionRequest): unknown {
    const obj: any = {};
    message.sessionId !== undefined && (obj.sessionId = message.sessionId);
    if (message.revealBlocks) {
      obj.revealBlocks = message.revealBlocks.map((e) => e ? FinaliseSessionRequest_Block.toJSON(e) : undefined);
    } else {
      obj.revealBlocks = [];
    }
    message.cipherSuite !== undefined && (obj.cipherSuite = tlsCipherSuiteTypeToJSON(message.cipherSuite));
    return obj;
  },

  create(base?: DeepPartial<FinaliseSessionRequest>): FinaliseSessionRequest {
    return FinaliseSessionRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<FinaliseSessionRequest>): FinaliseSessionRequest {
    const message = createBaseFinaliseSessionRequest();
    message.sessionId = object.sessionId ?? "";
    message.revealBlocks = object.revealBlocks?.map((e) => FinaliseSessionRequest_Block.fromPartial(e)) || [];
    message.cipherSuite = object.cipherSuite ?? 0;
    return message;
  },
};

function createBaseFinaliseSessionRequest_Block(): FinaliseSessionRequest_Block {
  return {
    authTag: new Uint8Array(0),
    key: new Uint8Array(0),
    iv: new Uint8Array(0),
    directReveal: undefined,
    zkReveal: undefined,
  };
}

export const FinaliseSessionRequest_Block = {
  encode(message: FinaliseSessionRequest_Block, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authTag.length !== 0) {
      writer.uint32(10).bytes(message.authTag);
    }
    if (message.key.length !== 0) {
      writer.uint32(18).bytes(message.key);
    }
    if (message.iv.length !== 0) {
      writer.uint32(26).bytes(message.iv);
    }
    if (message.directReveal !== undefined) {
      FinaliseSessionRequest_BlockRevealDirect.encode(message.directReveal, writer.uint32(34).fork()).ldelim();
    }
    if (message.zkReveal !== undefined) {
      FinaliseSessionRequest_BlockRevealZk.encode(message.zkReveal, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FinaliseSessionRequest_Block {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFinaliseSessionRequest_Block();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.authTag = reader.bytes();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.key = reader.bytes();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.iv = reader.bytes();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.directReveal = FinaliseSessionRequest_BlockRevealDirect.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.zkReveal = FinaliseSessionRequest_BlockRevealZk.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FinaliseSessionRequest_Block {
    return {
      authTag: isSet(object.authTag) ? bytesFromBase64(object.authTag) : new Uint8Array(0),
      key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(0),
      iv: isSet(object.iv) ? bytesFromBase64(object.iv) : new Uint8Array(0),
      directReveal: isSet(object.directReveal)
        ? FinaliseSessionRequest_BlockRevealDirect.fromJSON(object.directReveal)
        : undefined,
      zkReveal: isSet(object.zkReveal) ? FinaliseSessionRequest_BlockRevealZk.fromJSON(object.zkReveal) : undefined,
    };
  },

  toJSON(message: FinaliseSessionRequest_Block): unknown {
    const obj: any = {};
    message.authTag !== undefined &&
      (obj.authTag = base64FromBytes(message.authTag !== undefined ? message.authTag : new Uint8Array(0)));
    message.key !== undefined &&
      (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array(0)));
    message.iv !== undefined && (obj.iv = base64FromBytes(message.iv !== undefined ? message.iv : new Uint8Array(0)));
    message.directReveal !== undefined && (obj.directReveal = message.directReveal
      ? FinaliseSessionRequest_BlockRevealDirect.toJSON(message.directReveal)
      : undefined);
    message.zkReveal !== undefined &&
      (obj.zkReveal = message.zkReveal ? FinaliseSessionRequest_BlockRevealZk.toJSON(message.zkReveal) : undefined);
    return obj;
  },

  create(base?: DeepPartial<FinaliseSessionRequest_Block>): FinaliseSessionRequest_Block {
    return FinaliseSessionRequest_Block.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<FinaliseSessionRequest_Block>): FinaliseSessionRequest_Block {
    const message = createBaseFinaliseSessionRequest_Block();
    message.authTag = object.authTag ?? new Uint8Array(0);
    message.key = object.key ?? new Uint8Array(0);
    message.iv = object.iv ?? new Uint8Array(0);
    message.directReveal = (object.directReveal !== undefined && object.directReveal !== null)
      ? FinaliseSessionRequest_BlockRevealDirect.fromPartial(object.directReveal)
      : undefined;
    message.zkReveal = (object.zkReveal !== undefined && object.zkReveal !== null)
      ? FinaliseSessionRequest_BlockRevealZk.fromPartial(object.zkReveal)
      : undefined;
    return message;
  },
};

function createBaseFinaliseSessionRequest_BlockRevealDirect(): FinaliseSessionRequest_BlockRevealDirect {
  return { key: new Uint8Array(0), iv: new Uint8Array(0) };
}

export const FinaliseSessionRequest_BlockRevealDirect = {
  encode(message: FinaliseSessionRequest_BlockRevealDirect, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }
    if (message.iv.length !== 0) {
      writer.uint32(18).bytes(message.iv);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FinaliseSessionRequest_BlockRevealDirect {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFinaliseSessionRequest_BlockRevealDirect();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.bytes();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.iv = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FinaliseSessionRequest_BlockRevealDirect {
    return {
      key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(0),
      iv: isSet(object.iv) ? bytesFromBase64(object.iv) : new Uint8Array(0),
    };
  },

  toJSON(message: FinaliseSessionRequest_BlockRevealDirect): unknown {
    const obj: any = {};
    message.key !== undefined &&
      (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array(0)));
    message.iv !== undefined && (obj.iv = base64FromBytes(message.iv !== undefined ? message.iv : new Uint8Array(0)));
    return obj;
  },

  create(base?: DeepPartial<FinaliseSessionRequest_BlockRevealDirect>): FinaliseSessionRequest_BlockRevealDirect {
    return FinaliseSessionRequest_BlockRevealDirect.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<FinaliseSessionRequest_BlockRevealDirect>): FinaliseSessionRequest_BlockRevealDirect {
    const message = createBaseFinaliseSessionRequest_BlockRevealDirect();
    message.key = object.key ?? new Uint8Array(0);
    message.iv = object.iv ?? new Uint8Array(0);
    return message;
  },
};

function createBaseFinaliseSessionRequest_BlockRevealZk(): FinaliseSessionRequest_BlockRevealZk {
  return { proofs: [] };
}

export const FinaliseSessionRequest_BlockRevealZk = {
  encode(message: FinaliseSessionRequest_BlockRevealZk, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.proofs) {
      FinaliseSessionRequest_ZKProof.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FinaliseSessionRequest_BlockRevealZk {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFinaliseSessionRequest_BlockRevealZk();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.proofs.push(FinaliseSessionRequest_ZKProof.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FinaliseSessionRequest_BlockRevealZk {
    return {
      proofs: Array.isArray(object?.proofs)
        ? object.proofs.map((e: any) => FinaliseSessionRequest_ZKProof.fromJSON(e))
        : [],
    };
  },

  toJSON(message: FinaliseSessionRequest_BlockRevealZk): unknown {
    const obj: any = {};
    if (message.proofs) {
      obj.proofs = message.proofs.map((e) => e ? FinaliseSessionRequest_ZKProof.toJSON(e) : undefined);
    } else {
      obj.proofs = [];
    }
    return obj;
  },

  create(base?: DeepPartial<FinaliseSessionRequest_BlockRevealZk>): FinaliseSessionRequest_BlockRevealZk {
    return FinaliseSessionRequest_BlockRevealZk.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<FinaliseSessionRequest_BlockRevealZk>): FinaliseSessionRequest_BlockRevealZk {
    const message = createBaseFinaliseSessionRequest_BlockRevealZk();
    message.proofs = object.proofs?.map((e) => FinaliseSessionRequest_ZKProof.fromPartial(e)) || [];
    return message;
  },
};

function createBaseFinaliseSessionRequest_ZKProof(): FinaliseSessionRequest_ZKProof {
  return {
    proofJson: "",
    decryptedRedactedCiphertext: new Uint8Array(0),
    redactedPlaintext: new Uint8Array(0),
    startIdx: 0,
  };
}

export const FinaliseSessionRequest_ZKProof = {
  encode(message: FinaliseSessionRequest_ZKProof, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.proofJson !== "") {
      writer.uint32(10).string(message.proofJson);
    }
    if (message.decryptedRedactedCiphertext.length !== 0) {
      writer.uint32(18).bytes(message.decryptedRedactedCiphertext);
    }
    if (message.redactedPlaintext.length !== 0) {
      writer.uint32(26).bytes(message.redactedPlaintext);
    }
    if (message.startIdx !== 0) {
      writer.uint32(32).uint32(message.startIdx);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FinaliseSessionRequest_ZKProof {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFinaliseSessionRequest_ZKProof();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.proofJson = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.decryptedRedactedCiphertext = reader.bytes();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.redactedPlaintext = reader.bytes();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.startIdx = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FinaliseSessionRequest_ZKProof {
    return {
      proofJson: isSet(object.proofJson) ? String(object.proofJson) : "",
      decryptedRedactedCiphertext: isSet(object.decryptedRedactedCiphertext)
        ? bytesFromBase64(object.decryptedRedactedCiphertext)
        : new Uint8Array(0),
      redactedPlaintext: isSet(object.redactedPlaintext)
        ? bytesFromBase64(object.redactedPlaintext)
        : new Uint8Array(0),
      startIdx: isSet(object.startIdx) ? Number(object.startIdx) : 0,
    };
  },

  toJSON(message: FinaliseSessionRequest_ZKProof): unknown {
    const obj: any = {};
    message.proofJson !== undefined && (obj.proofJson = message.proofJson);
    message.decryptedRedactedCiphertext !== undefined &&
      (obj.decryptedRedactedCiphertext = base64FromBytes(
        message.decryptedRedactedCiphertext !== undefined ? message.decryptedRedactedCiphertext : new Uint8Array(0),
      ));
    message.redactedPlaintext !== undefined &&
      (obj.redactedPlaintext = base64FromBytes(
        message.redactedPlaintext !== undefined ? message.redactedPlaintext : new Uint8Array(0),
      ));
    message.startIdx !== undefined && (obj.startIdx = Math.round(message.startIdx));
    return obj;
  },

  create(base?: DeepPartial<FinaliseSessionRequest_ZKProof>): FinaliseSessionRequest_ZKProof {
    return FinaliseSessionRequest_ZKProof.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<FinaliseSessionRequest_ZKProof>): FinaliseSessionRequest_ZKProof {
    const message = createBaseFinaliseSessionRequest_ZKProof();
    message.proofJson = object.proofJson ?? "";
    message.decryptedRedactedCiphertext = object.decryptedRedactedCiphertext ?? new Uint8Array(0);
    message.redactedPlaintext = object.redactedPlaintext ?? new Uint8Array(0);
    message.startIdx = object.startIdx ?? 0;
    return message;
  },
};

function createBaseFinaliseSessionResponse(): FinaliseSessionResponse {
  return { receipt: undefined, claimData: undefined, signature: new Uint8Array(0) };
}

export const FinaliseSessionResponse = {
  encode(message: FinaliseSessionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.receipt !== undefined) {
      TLSReceipt.encode(message.receipt, writer.uint32(10).fork()).ldelim();
    }
    if (message.claimData !== undefined) {
      ProviderClaimData.encode(message.claimData, writer.uint32(18).fork()).ldelim();
    }
    if (message.signature.length !== 0) {
      writer.uint32(26).bytes(message.signature);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FinaliseSessionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFinaliseSessionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.receipt = TLSReceipt.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.claimData = ProviderClaimData.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.signature = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FinaliseSessionResponse {
    return {
      receipt: isSet(object.receipt) ? TLSReceipt.fromJSON(object.receipt) : undefined,
      claimData: isSet(object.claimData) ? ProviderClaimData.fromJSON(object.claimData) : undefined,
      signature: isSet(object.signature) ? bytesFromBase64(object.signature) : new Uint8Array(0),
    };
  },

  toJSON(message: FinaliseSessionResponse): unknown {
    const obj: any = {};
    message.receipt !== undefined && (obj.receipt = message.receipt ? TLSReceipt.toJSON(message.receipt) : undefined);
    message.claimData !== undefined &&
      (obj.claimData = message.claimData ? ProviderClaimData.toJSON(message.claimData) : undefined);
    message.signature !== undefined &&
      (obj.signature = base64FromBytes(message.signature !== undefined ? message.signature : new Uint8Array(0)));
    return obj;
  },

  create(base?: DeepPartial<FinaliseSessionResponse>): FinaliseSessionResponse {
    return FinaliseSessionResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<FinaliseSessionResponse>): FinaliseSessionResponse {
    const message = createBaseFinaliseSessionResponse();
    message.receipt = (object.receipt !== undefined && object.receipt !== null)
      ? TLSReceipt.fromPartial(object.receipt)
      : undefined;
    message.claimData = (object.claimData !== undefined && object.claimData !== null)
      ? ProviderClaimData.fromPartial(object.claimData)
      : undefined;
    message.signature = object.signature ?? new Uint8Array(0);
    return message;
  },
};

export type ReclaimWitnessDefinition = typeof ReclaimWitnessDefinition;
export const ReclaimWitnessDefinition = {
  name: "ReclaimWitness",
  fullName: "reclaim_witness.ReclaimWitness",
  methods: {
    /** get the x25519 public key of the verifier that can be used to verify authenticity of receipts & credentials */
    getVerifierPublicKey: {
      name: "GetVerifierPublicKey",
      requestType: GetVerifierPublicKeyRequest,
      requestStream: false,
      responseType: GetVerifierPublicKeyResponse,
      responseStream: false,
      options: {},
    },
    /** initialise a new TLS verification session with the verifier */
    initialiseSession: {
      name: "initialiseSession",
      requestType: InitialiseSessionRequest,
      requestStream: false,
      responseType: InitialiseSessionResponse,
      responseStream: false,
      options: {},
    },
    /** push blocks to the session */
    pushToSession: {
      name: "PushToSession",
      requestType: PushToSessionRequest,
      requestStream: false,
      responseType: PushToSessionResponse,
      responseStream: false,
      options: {},
    },
    /** listen to blocks from the session */
    pullFromSession: {
      name: "PullFromSession",
      requestType: PullFromSessionRequest,
      requestStream: false,
      responseType: PullFromSessionResponse,
      responseStream: true,
      options: {},
    },
    /** cancel and destroy the session */
    cancelSession: {
      name: "CancelSession",
      requestType: CancelSessionRequest,
      requestStream: false,
      responseType: CancelSessionResponse,
      responseStream: false,
      options: {},
    },
    /** finalise the session, and generate the receipt & provider signature */
    finaliseSession: {
      name: "FinaliseSession",
      requestType: FinaliseSessionRequest,
      requestStream: false,
      responseType: FinaliseSessionResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface ReclaimWitnessServiceImplementation<CallContextExt = {}> {
  /** get the x25519 public key of the verifier that can be used to verify authenticity of receipts & credentials */
  getVerifierPublicKey(
    request: GetVerifierPublicKeyRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<GetVerifierPublicKeyResponse>>;
  /** initialise a new TLS verification session with the verifier */
  initialiseSession(
    request: InitialiseSessionRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<InitialiseSessionResponse>>;
  /** push blocks to the session */
  pushToSession(
    request: PushToSessionRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<PushToSessionResponse>>;
  /** listen to blocks from the session */
  pullFromSession(
    request: PullFromSessionRequest,
    context: CallContext & CallContextExt,
  ): ServerStreamingMethodResult<DeepPartial<PullFromSessionResponse>>;
  /** cancel and destroy the session */
  cancelSession(
    request: CancelSessionRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<CancelSessionResponse>>;
  /** finalise the session, and generate the receipt & provider signature */
  finaliseSession(
    request: FinaliseSessionRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<FinaliseSessionResponse>>;
}

export interface ReclaimWitnessClient<CallOptionsExt = {}> {
  /** get the x25519 public key of the verifier that can be used to verify authenticity of receipts & credentials */
  getVerifierPublicKey(
    request: DeepPartial<GetVerifierPublicKeyRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<GetVerifierPublicKeyResponse>;
  /** initialise a new TLS verification session with the verifier */
  initialiseSession(
    request: DeepPartial<InitialiseSessionRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<InitialiseSessionResponse>;
  /** push blocks to the session */
  pushToSession(
    request: DeepPartial<PushToSessionRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<PushToSessionResponse>;
  /** listen to blocks from the session */
  pullFromSession(
    request: DeepPartial<PullFromSessionRequest>,
    options?: CallOptions & CallOptionsExt,
  ): AsyncIterable<PullFromSessionResponse>;
  /** cancel and destroy the session */
  cancelSession(
    request: DeepPartial<CancelSessionRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<CancelSessionResponse>;
  /** finalise the session, and generate the receipt & provider signature */
  finaliseSession(
    request: DeepPartial<FinaliseSessionRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<FinaliseSessionResponse>;
}

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

function bytesFromBase64(b64: string): Uint8Array {
  if (tsProtoGlobalThis.Buffer) {
    return Uint8Array.from(tsProtoGlobalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = tsProtoGlobalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (tsProtoGlobalThis.Buffer) {
    return tsProtoGlobalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return tsProtoGlobalThis.btoa(bin.join(""));
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export type ServerStreamingMethodResult<Response> = { [Symbol.asyncIterator](): AsyncIterator<Response, void> };
