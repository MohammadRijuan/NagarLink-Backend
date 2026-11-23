"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const strict_1 = __importDefault(require("node:assert/strict"));
const node_test_1 = require("node:test");
const client_1 = require("../../../generated/prisma/client");
const sslcommerz_gateway_1 = require("./sslcommerz.gateway");
const payment_service_1 = require("./payment.service");
const enums_1 = require("../../../generated/prisma/enums");
const originalFetch = globalThis.fetch;
(0, node_test_1.afterEach)(() => {
    globalThis.fetch = originalFetch;
});
const expected = {
    tranId: "NL-test-transaction",
    amount: new client_1.Prisma.Decimal("150.00"),
    valId: "VALIDATION-123",
    storeId: process.env.SSLCOMMERZ_STORE_ID ?? "",
};
const validResponse = () => ({
    status: "VALID",
    tran_id: expected.tranId,
    val_id: expected.valId,
    amount: "150.00",
    currency: "BDT",
    store_id: expected.storeId,
    tran_date: "2026-11-23 10:00:00",
});
(0, node_test_1.test)("calculates a 15% advance and rounds it to two decimals", () => {
    strict_1.default.equal((0, payment_service_1.calculateAdvanceAmount)("100.05").toFixed(2), "15.01");
    strict_1.default.equal((0, payment_service_1.calculateAdvanceAmount)("10000").toFixed(2), "1500.00");
});
(0, node_test_1.test)("rejects advance payments below SSLCommerz minimum", () => {
    strict_1.default.throws(() => (0, payment_service_1.calculateAdvanceAmount)("50.00"));
});
(0, node_test_1.test)("allows recovery of an already selected pending quotation", () => {
    strict_1.default.equal((0, payment_service_1.canRecoverSelectedPayment)(enums_1.WorkStatus.REQUESTED, enums_1.QuotationStatus.PENDING), true);
    strict_1.default.equal((0, payment_service_1.canRecoverSelectedPayment)(enums_1.WorkStatus.CITIZEN_ACCEPTED, enums_1.QuotationStatus.APPROVED), true);
    strict_1.default.equal((0, payment_service_1.canRecoverSelectedPayment)(enums_1.WorkStatus.ADVANCE_PAID, enums_1.QuotationStatus.APPROVED), false);
    strict_1.default.equal((0, payment_service_1.canRecoverSelectedPayment)(enums_1.WorkStatus.REQUESTED, enums_1.QuotationStatus.REJECTED), false);
});
(0, node_test_1.test)("initiates a session with the stored transaction and public callback URLs", async () => {
    let submitted;
    globalThis.fetch = (async (_input, init) => {
        submitted = init?.body;
        return new Response(JSON.stringify({
            status: "SUCCESS",
            sessionkey: "session-123",
            GatewayPageURL: "https://sandbox.sslcommerz.com/gwprocess/v4/gw.php?Q=abc",
            tran_id: expected.tranId,
            amount: "150.00",
            currency: "BDT",
        }), { status: 200, headers: { "Content-Type": "application/json" } });
    });
    const session = await (0, sslcommerz_gateway_1.initiateSslCommerzSession)(expected.tranId, "150.00", {
        name: "Test Citizen",
        email: "citizen@example.test",
        phone: "01700000000",
        address: "Test address",
        city: "Dhaka",
        postalCode: "1000",
        productName: "Test service",
    });
    strict_1.default.equal(submitted?.get("tran_id"), expected.tranId);
    strict_1.default.equal(submitted?.get("total_amount"), "150.00");
    strict_1.default.equal(submitted?.get("currency"), "BDT");
    const successUrl = submitted?.get("success_url");
    const ipnUrl = submitted?.get("ipn_url");
    strict_1.default.equal(typeof successUrl === "string" &&
        successUrl.endsWith("/api/v1/payments/success"), true);
    strict_1.default.equal(typeof ipnUrl === "string" && ipnUrl.endsWith("/api/v1/payments/ipn"), true);
    strict_1.default.equal(session.sessionKey, "session-123");
    strict_1.default.equal(session.gatewayPageUrl.startsWith("https://"), true);
    strict_1.default.equal(session.response.GatewayPageURL, "https://sandbox.sslcommerz.com/gwprocess/v4/gw.php?Q=abc");
});
(0, node_test_1.test)("does not return a URL when SSLCommerz rejects initiation", async () => {
    globalThis.fetch = (async () => new Response(JSON.stringify({ status: "FAILED", failedreason: "Invalid request" }), { status: 200, headers: { "Content-Type": "application/json" } }));
    await strict_1.default.rejects((0, sslcommerz_gateway_1.initiateSslCommerzSession)(expected.tranId, "150.00", {
        name: "Test Citizen",
        email: "citizen@example.test",
        phone: "01700000000",
        address: "Test address",
        city: "Dhaka",
        postalCode: "1000",
        productName: "Test service",
    }), (error) => error instanceof sslcommerz_gateway_1.SslCommerzGatewayError && !error.ambiguous);
});
(0, node_test_1.test)("accepts a verified matching transaction", () => {
    strict_1.default.doesNotThrow(() => (0, payment_service_1.validateSslCommerzValidation)(validResponse(), expected));
});
(0, node_test_1.test)("rejects a mismatched transaction ID", () => {
    strict_1.default.throws(() => (0, payment_service_1.validateSslCommerzValidation)({ ...validResponse(), tran_id: "another-transaction" }, expected));
});
(0, node_test_1.test)("rejects a mismatched validation ID", () => {
    strict_1.default.throws(() => (0, payment_service_1.validateSslCommerzValidation)({ ...validResponse(), val_id: "another-validation" }, expected));
});
(0, node_test_1.test)("rejects an incorrect amount", () => {
    strict_1.default.throws(() => (0, payment_service_1.validateSslCommerzValidation)({ ...validResponse(), amount: "149.99" }, expected));
});
(0, node_test_1.test)("rejects a non-BDT currency", () => {
    strict_1.default.throws(() => (0, payment_service_1.validateSslCommerzValidation)({ ...validResponse(), currency: "USD" }, expected));
});
(0, node_test_1.test)("rejects invalid status and merchant", () => {
    strict_1.default.throws(() => (0, payment_service_1.validateSslCommerzValidation)({ ...validResponse(), status: "FAILED" }, expected));
    strict_1.default.throws(() => (0, payment_service_1.validateSslCommerzValidation)({ ...validResponse(), store_id: "another-store" }, expected));
});
(0, node_test_1.test)("rejects invalid transaction dates", () => {
    strict_1.default.throws(() => (0, payment_service_1.validateSslCommerzValidation)({ ...validResponse(), tran_date: "not-a-date" }, expected));
});
//# sourceMappingURL=payment.service.test.js.map