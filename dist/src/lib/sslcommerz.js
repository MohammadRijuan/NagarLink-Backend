"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateSslCommerzPayment = exports.createSslCommerzSession = void 0;
const config_1 = __importDefault(require("../config"));
const getBaseUrl = () => {
    if (!config_1.default.ssl_base_url || !config_1.default.ssl_store_id || !config_1.default.ssl_store_password) {
        throw new Error("SSLCommerz configuration is missing");
    }
    return config_1.default.ssl_base_url.replace(/\/+$/, "");
};
const createSslCommerzSession = async (payload) => {
    const baseUrl = getBaseUrl();
    const formData = new URLSearchParams({
        store_id: config_1.default.ssl_store_id,
        store_passwd: config_1.default.ssl_store_password,
        ...payload,
    });
    const response = await fetch(`${baseUrl}/gwprocess/v4/api.php`, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData,
    });
    if (!response.ok) {
        throw new Error("Failed to connect to SSLCommerz");
    }
    return (await response.json());
};
exports.createSslCommerzSession = createSslCommerzSession;
const validateSslCommerzPayment = async (valId) => {
    const baseUrl = getBaseUrl();
    const params = new URLSearchParams({
        val_id: valId,
        store_id: config_1.default.ssl_store_id,
        store_passwd: config_1.default.ssl_store_password,
        format: "json",
    });
    const response = await fetch(`${baseUrl}/validator/api/validationserverAPI.php?${params.toString()}`, {
        method: "GET",
        headers: {
            Accept: "application/json",
        },
    });
    if (!response.ok) {
        throw new Error("Failed to validate SSLCommerz transaction");
    }
    return (await response.json());
};
exports.validateSslCommerzPayment = validateSslCommerzPayment;
//# sourceMappingURL=sslcommerz.js.map