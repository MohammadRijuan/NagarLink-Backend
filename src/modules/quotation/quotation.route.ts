import express from "express";
import { auth } from "../../middlewares/checkAuth";
import { Role } from "../../../generated/prisma/enums";
import { quotationControllers } from "./quotation.controller";
import { workRequestControllers } from "../request/workRequest.controller";

const router = express.Router();

// Staff submits quotation
router.post(
  "/",
  auth(Role.STAFF),
  quotationControllers.createQuotation,
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
  quotationControllers.getQuotationById,
);

// Staff updates their quotation
router.patch(
  "/:id",
  auth(Role.STAFF),
  quotationControllers.updateQuotation,
);

// Admin / Manager updates quotation status
router.patch(
  "/:id/status",
  auth(Role.ADMIN, Role.MANAGER),
  quotationControllers.updateQuotationStatus,
);

// Admin deletes quotation
router.delete(
  "/:id",
  auth(Role.ADMIN),
  quotationControllers
  .deleteQuotation,
);

// citizen will select the quotation
router.patch(
  "/:id/select-quotation",
  auth(Role.CITIZEN),
  quotationControllers.selectQuotation,
);

export const quotationRoutes = router;