"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentRoutes = void 0;
const express_1 = require("express");
const checkAuth_1 = require("../../middlewares/checkAuth");
const enums_1 = require("../../../generated/prisma/enums");
const payment_controller_1 = require("./payment.controller");
const router = (0, express_1.Router)();
// Citizen creates a payment
router.post("/create", (0, checkAuth_1.auth)(enums_1.Role.CITIZEN), payment_controller_1.paymentControllers.createPayment);
// SSLCommerz callbacks
router.post("/success", payment_controller_1.paymentControllers.paymentSuccess);
router.post("/failure", payment_controller_1.paymentControllers.paymentFailure);
router.post("/cancel", payment_controller_1.paymentControllers.paymentCancel);
// SSLCommerz server-to-server notification
router.post("/ipn", payment_controller_1.paymentControllers.paymentIpn);
// Retrieve payment
router.get("/:id", (0, checkAuth_1.auth)(enums_1.Role.CITIZEN, enums_1.Role.ADMIN, enums_1.Role.MANAGER), payment_controller_1.paymentControllers.getPaymentById);
exports.paymentRoutes = router;
//# sourceMappingURL=payment.route.js.map