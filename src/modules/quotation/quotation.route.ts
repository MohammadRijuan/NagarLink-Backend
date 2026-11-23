
import express from "express";
import { auth } from "../../middlewares/checkAuth";
import { Role } from "../../../generated/prisma/enums";
import { quotationControllers } from "./quotation.controller";
import { validateRequest } from "../../middlewares/validateRequest";
import {
  createQuotationSchema,
  quotationIdParamsSchema,
  selectQuotationSchema,
  updateQuotationSchema,
  updateQuotationStatusSchema,
} from "./quotation.validation";

const router = express.Router();

// Staff submits quotation
router.post(
  "/",
  auth(Role.STAFF),
  validateRequest({ body: createQuotationSchema }),
  quotationControllers.createQuotation,
);

// Citizen selects a quotation
router.post(
  "/select",
  auth(Role.CITIZEN),
  validateRequest({ body: selectQuotationSchema }),
  quotationControllers.selectQuotation,
);

// Admin / Manager gets all quotations
router.get(
  "/",
  auth(Role.ADMIN, Role.MANAGER),
  quotationControllers.getAllQuotations,
);

// Staff / Admin / Manager gets quotation details
router.get(
  "/:id",
  auth(Role.STAFF, Role.ADMIN, Role.MANAGER),
  validateRequest({ params: quotationIdParamsSchema }),
  quotationControllers.getQuotationById,
);

// Staff updates their quotation
router.patch(
  "/:id",
  auth(Role.STAFF),
  validateRequest({
    params: quotationIdParamsSchema,
    body: updateQuotationSchema,
  }),
  quotationControllers.updateQuotation,
);

// Admin / Manager updates quotation status
router.patch(
  "/:id/status",
  auth(Role.ADMIN, Role.MANAGER),
  validateRequest({
    params: quotationIdParamsSchema,
    body: updateQuotationStatusSchema,
  }),
  quotationControllers.updateQuotationStatus,
);

// Admin deletes quotation
router.delete(
  "/:id",
  auth(Role.ADMIN),
  validateRequest({ params: quotationIdParamsSchema }),
  quotationControllers.deleteQuotation,
);

export const quotationRoutes = router;
