type JsonRecord = Record<string, unknown>;
export interface SslCommerzCustomer {
    name: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    postalCode: string;
    productName: string;
}
export interface SslCommerzSession {
    sessionKey: string | null;
    gatewayPageUrl: string;
    response: JsonRecord;
}
export declare class SslCommerzGatewayError extends Error {
    readonly ambiguous: boolean;
    readonly providerResponse?: JsonRecord | undefined;
    constructor(message: string, ambiguous: boolean, providerResponse?: JsonRecord | undefined);
}
export declare const assertSslCommerzConfiguration: () => void;
export declare const initiateSslCommerzSession: (tranId: string, amount: string, customer: SslCommerzCustomer) => Promise<SslCommerzSession>;
export declare const validateSslCommerzTransaction: (valId: string) => Promise<{
    data: JsonRecord;
    sanitized: JsonRecord;
    storeId: string | undefined;
}>;
export declare const querySslCommerzTransaction: (tranId: string) => Promise<JsonRecord>;
export {};
//# sourceMappingURL=sslcommerz.gateway.d.ts.map