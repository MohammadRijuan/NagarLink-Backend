"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.quotationRoutes = void 0;
const express_1 = __importDefault(require("express"));
const checkAuth_1 = require("../../middlewares/checkAuth");
const enums_1 = require("../../../generated/prisma/enums");
const quotation_controller_1 = require("./quotation.controller");
const router = express_1.default.Router();
// Staff submits quotation
router.post("/", (0, checkAuth_1.auth)(enums_1.Role.STAFF), quotation_controller_1.quotationControllers.createQuotation);
// Citizen selects a quotation
router.post("/select", (0, checkAuth_1.auth)(enums_1.Role.CITIZEN), quotation_controller_1.quotationControllers.selectQuotation);
// Admin / Manager gets all quotations
router.get("/", (0, checkAuth_1.auth)(enums_1.Role.ADMIN, enums_1.Role.MANAGER), quotation_controller_1.quotationControllers.getAllQuotations);
// Staff / Admin / Manager gets quotation details
router.get("/:id", (0, checkAuth_1.auth)(enums_1.Role.STAFF, enums_1.Role.ADMIN, enums_1.Role.MANAGER), quotation_controller_1.quotationControllers.getQuotationById);
// Staff updates their quotation
router.patch("/:id", (0, checkAuth_1.auth)(enums_1.Role.STAFF), quotation_controller_1.quotationControllers.updateQuotation);
// Admin / Manager updates quotation status
router.patch("/:id/status", (0, checkAuth_1.auth)(enums_1.Role.ADMIN, enums_1.Role.MANAGER), quotation_controller_1.quotationControllers.updateQuotationStatus);
// Admin deletes quotation
router.delete("/:id", (0, checkAuth_1.auth)(enums_1.Role.ADMIN), quotation_controller_1.quotationControllers.deleteQuotation);
exports.quotationRoutes = router;
//# sourceMappingURL=quotation.route.js.map