interface SslCommerzResponse {
    status?: string;
    failedreason?: string;
    GatewayPageURL?: string;
    redirectGatewayURL?: string;
    tran_id?: string;
    val_id?: string;
    [key: string]: unknown;
}
export declare const createSslCommerzSession: (payload: Record<string, string>) => Promise<SslCommerzResponse>;
export declare const validateSslCommerzPayment: (valId: string) => Promise<SslCommerzResponse>;
export {};
//# sourceMappingURL=sslcommerz.d.ts.map