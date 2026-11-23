"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.querySslCommerzTransaction = exports.validateSslCommerzTransaction = exports.initiateSslCommerzSession = exports.assertSslCommerzConfiguration = exports.SslCommerzGatewayError = void 0;
const config_1 = __importDefault(require("../../config"));
class SslCommerzGatewayError extends Error {
    ambiguous;
    providerResponse;
    constructor(message, ambiguous, providerResponse) {
        super(message);
        this.ambiguous = ambiguous;
        this.providerResponse = providerResponse;
        this.name = "SslCommerzGatewayError";
    }
}
exports.SslCommerzGatewayError = SslCommerzGatewayError;
const getConfiguration = () => {
    const storeId = config_1.default.ssl_store_id?.trim();
    const storePassword = config_1.default.ssl_store_password?.trim();
    const baseUrl = config_1.default.ssl_base_url?.trim();
    const callbackBaseUrl = config_1.default.ssl_callback_base_url?.trim() || config_1.default.bkash_callback_url?.trim();
    if (!storeId || !storePassword || !baseUrl) {
        throw new Error("SSLCOMMERZ_STORE_ID, SSLCOMMERZ_STORE_PASSWORD, and SSLCOMMERZ_BASE_URL must be configured");
    }
    if (!callbackBaseUrl) {
        throw new Error("SSLCOMMERZ_CALLBACK_BASE_URL must be configured as the publicly reachable HTTPS backend origin");
    }
    let gatewayUrl;
    let callbackUrl;
    try {
        gatewayUrl = new URL(baseUrl);
        callbackUrl = new URL(callbackBaseUrl);
    }
    catch {
        throw new Error("SSLCommerz base and callback URLs must be valid absolute URLs");
    }
    if (gatewayUrl.protocol !== "https:" ||
        !gatewayUrl.hostname.endsWith(".sslcommerz.com")) {
        throw new Error("SSLCOMMERZ_BASE_URL must use an HTTPS SSLCommerz host");
    }
    if (callbackUrl.protocol !== "https:" ||
        callbackUrl.username ||
        callbackUrl.password ||
        callbackUrl.search ||
        callbackUrl.hash ||
        (config_1.default.ssl_callback_base_url?.trim()
            ? callbackUrl.pathname !== "/" && callbackUrl.pathname !== ""
            : callbackUrl.pathname !== "/" &&
                callbackUrl.pathname !== "" &&
                callbackUrl.pathname !== "/api/v1")) {
        throw new Error("SSLCOMMERZ_CALLBACK_BASE_URL must be an HTTPS origin, or BKASH_CALLBACK_URL must be a public HTTPS URL ending in /api/v1");
    }
    const callbackRoot = `${callbackUrl.origin}/api/v1/payments`;
    return {
        storeId,
        storePassword,
        apiOrigin: gatewayUrl.origin,
        callbacks: {
            success: `${callbackRoot}/success`,
            fail: `${callbackRoot}/fail`,
            cancel: `${callbackRoot}/cancel`,
            ipn: `${callbackRoot}/ipn`,
        },
    };
};
const assertSslCommerzConfiguration = () => {
    getConfiguration();
};
exports.assertSslCommerzConfiguration = assertSslCommerzConfiguration;
const readJsonResponse = async (response) => {
    try {
        const result = await response.json();
        if (Array.isArray(result)) {
            const first = result[0];
            if (first && typeof first === "object" && !Array.isArray(first)) {
                return first;
            }
            return {};
        }
        if (!result || typeof result !== "object") {
            throw new Error("Unexpected response format");
        }
        return result;
    }
    catch {
        throw new SslCommerzGatewayError("SSLCommerz returned an unreadable response", true);
    }
};
const getString = (record, ...keys) => {
    for (const key of keys) {
        const value = record[key];
        if (typeof value === "string" && value.trim()) {
            return value.trim();
        }
    }
    return undefined;
};
const getOptionalNumber = (record, ...keys) => {
    for (const key of keys) {
        const value = record[key];
        if (typeof value === "string" || typeof value === "number") {
            const parsed = Number(value);
            if (Number.isFinite(parsed)) {
                return parsed;
            }
        }
    }
    return undefined;
};
const sanitizeProviderResponse = (record) => {
    const safeFields = {
        status: getString(record, "status"),
        tran_id: getString(record, "tran_id"),
        val_id: getString(record, "val_id"),
        sessionkey: getString(record, "sessionkey", "session_key"),
        GatewayPageURL: getString(record, "GatewayPageURL"),
        bank_tran_id: getString(record, "bank_tran_id"),
        card_type: getString(record, "card_type"),
        store_amount: getOptionalNumber(record, "store_amount"),
        currency: getString(record, "currency", "currency_type"),
        amount: getOptionalNumber(record, "amount", "total_amount"),
    };
    return Object.fromEntries(Object.entries(safeFields).filter(([, value]) => value !== undefined));
};
const requestJson = async (url, init) => {
    let response;
    try {
        response = await fetch(url, {
            ...init,
            signal: AbortSignal.timeout(15_000),
        });
    }
    catch {
        throw new SslCommerzGatewayError("SSLCommerz request failed or timed out", true);
    }
    const data = await readJsonResponse(response);
    if (!response.ok) {
        throw new SslCommerzGatewayError("SSLCommerz rejected the request", response.status >= 500, sanitizeProviderResponse(data));
    }
    return { response, data };
};
const initiateSslCommerzSession = async (tranId, amount, customer) => {
    const settings = getConfiguration();
    const formFields = {
        store_id: settings.storeId,
        store_passwd: settings.storePassword,
        total_amount: amount,
        currency: "BDT",
        tran_id: tranId,
        success_url: settings.callbacks.success,
        fail_url: settings.callbacks.fail,
        cancel_url: settings.callbacks.cancel,
        ipn_url: settings.callbacks.ipn,
        product_name: customer.productName.slice(0, 255),
        product_category: "Service",
        product_profile: "non-physical-goods",
        cus_name: customer.name,
        cus_email: customer.email,
        cus_add1: customer.address,
        cus_city: customer.city,
        cus_postcode: customer.postalCode,
        cus_country: "Bangladesh",
        cus_phone: customer.phone,
        shipping_method: "NO",
        num_of_item: "1",
    };
    const body = new FormData();
    for (const [key, value] of Object.entries(formFields)) {
        body.append(key, value);
    }
    const { data } = await requestJson(new URL("/gwprocess/v4/api.php", settings.apiOrigin), {
        method: "POST",
        body,
    });
    const status = getString(data, "status")?.toUpperCase();
    const gatewayPageUrl = getString(data, "GatewayPageURL");
    if (status !== "SUCCESS" || !gatewayPageUrl) {
        throw new SslCommerzGatewayError("SSLCommerz did not create a payment session", false, sanitizeProviderResponse(data));
    }
    let parsedGatewayPageUrl;
    try {
        parsedGatewayPageUrl = new URL(gatewayPageUrl);
    }
    catch {
        throw new SslCommerzGatewayError("SSLCommerz returned an invalid payment URL", true, sanitizeProviderResponse(data));
    }
    if (parsedGatewayPageUrl.protocol !== "https:" ||
        !parsedGatewayPageUrl.hostname.endsWith(".sslcommerz.com")) {
        throw new SslCommerzGatewayError("SSLCommerz returned an untrusted payment URL", true, sanitizeProviderResponse(data));
    }
    return {
        sessionKey: getString(data, "sessionkey", "session_key") ?? null,
        gatewayPageUrl,
        response: sanitizeProviderResponse(data),
    };
};
exports.initiateSslCommerzSession = initiateSslCommerzSession;
const validateSslCommerzTransaction = async (valId) => {
    const settings = getConfiguration();
    const url = new URL("/validator/api/validationserverAPI.php", settings.apiOrigin);
    url.search = new URLSearchParams({
        val_id: valId,
        store_id: settings.storeId,
        store_passwd: settings.storePassword,
        v: "1",
        format: "json",
    }).toString();
    const { data } = await requestJson(url, { method: "GET" });
    return {
        data,
        sanitized: sanitizeProviderResponse(data),
        storeId: getString(data, "store_id"),
    };
};
exports.validateSslCommerzTransaction = validateSslCommerzTransaction;
const querySslCommerzTransaction = async (tranId) => {
    const settings = getConfiguration();
    const url = new URL("/validator/api/merchantTransIDvalidationAPI.php", settings.apiOrigin);
    url.search = new URLSearchParams({
        tran_id: tranId,
        store_id: settings.storeId,
        store_passwd: settings.storePassword,
        v: "1",
        format: "json",
    }).toString();
    const { data } = await requestJson(url, { method: "GET" });
    return data;
};
exports.querySslCommerzTransaction = querySslCommerzTransaction;
//# sourceMappingURL=sslcommerz.gateway.js.map