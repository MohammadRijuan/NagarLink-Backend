"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.staffCategoryRoutes = void 0;
const express_1 = __importDefault(require("express"));
const checkAuth_1 = require("../../middlewares/checkAuth");
const enums_1 = require("../../../generated/prisma/enums");
const staffCategory_controller_1 = require("./staffCategory.controller");
const validateRequest_1 = require("../../middlewares/validateRequest");
const staffCategory_validation_1 = require("./staffCategory.validation");
const router = express_1.default.Router();
// Assign categories to staff
router.post("/:staffId/categories", (0, checkAuth_1.auth)(enums_1.Role.ADMIN), (0, validateRequest_1.validateRequest)({
    params: staffCategory_validation_1.staffIdParamsSchema,
    body: staffCategory_validation_1.assignCategoriesSchema,
}), staffCategory_controller_1.staffCategoryControllers.assignCategoriesToStaff);
// Get categories assigned to a staff member
router.get("/:staffId/categories", (0, checkAuth_1.auth)(enums_1.Role.ADMIN, enums_1.Role.MANAGER), (0, validateRequest_1.validateRequest)({ params: staffCategory_validation_1.staffIdParamsSchema }), staffCategory_controller_1.staffCategoryControllers.getStaffCategories);
// Remove a category assignment
router.delete("/:staffId/categories/:categoryId", (0, checkAuth_1.auth)(enums_1.Role.ADMIN), (0, validateRequest_1.validateRequest)({ params: staffCategory_validation_1.staffCategoryParamsSchema }), staffCategory_controller_1.staffCategoryControllers.removeStaffCategory);
exports.staffCategoryRoutes = router;
//# sourceMappingURL=staffCategory.route.js.map