"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("./config"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const notFound_1 = require("./middlewares/notFound");
const auth_route_1 = require("./modules/auth/auth.route");
const globalErrorHandler_1 = require("./middlewares/globalErrorHandler");
const user_route_1 = require("./modules/user/user.route");
const department_route_1 = require("./modules/department/department.route");
const category_route_1 = require("./modules/category/category.route");
const staffApplication_route_1 = require("./modules/staffApplication/staffApplication.route");
const staffManagement_route_1 = require("./modules/staffManagement/staffManagement.route");
const staffCategory_route_1 = require("./modules/staffCategory/staffCategory.route");
const quotation_route_1 = require("./modules/quotation/quotation.route");
const workRequest_route_1 = require("./modules/request/workRequest.route");
const staffInvitation_route_1 = require("./modules/staffInvitation/staffInvitation.route");
const payment_route_1 = require("./modules/payment/payment.route");
const assignment_route_1 = require("./modules/assignment/assignment.route");
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: config_1.default.app_url,
    credentials: true,
}));
// middlewares
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cookie_parser_1.default)());
// all api
app.use("/api/v1/auth", auth_route_1.authRoutes);
app.use("/api/v1/users", user_route_1.userRoutes);
app.use("/api/v1/departments", department_route_1.departmentRoutes);
app.use("/api/v1/categories", category_route_1.categoryRoutes);
app.use("/api/v1/staff-application", staffApplication_route_1.staffApplicationRoutes);
app.use("/api/v1/staff", staffManagement_route_1.staffRoutes);
app.use("/api/v1/staff-category", staffCategory_route_1.staffCategoryRoutes);
app.use("/api/v1/quotation", quotation_route_1.quotationRoutes);
app.use("/api/v1/work-request", workRequest_route_1.workRequestRoutes);
app.use("/api/v1/staff-invitation", staffInvitation_route_1.staffInvitationRoutes);
app.use("/api/v1/payments", payment_route_1.paymentRoutes);
app.use("/api/v1/assignments", assignment_route_1.assignmentRoutes);
app.use("/api/v1/work-attachments", assignment_route_1.assignmentRoutes);
app.use("/", (req, res) => {
    // res.send("NagarLink Server working perfectly")
    res.json({
        success: true,
        message: "NagarLink Server is now live",
    });
});
app.use(globalErrorHandler_1.globalHandleError);
app.use(notFound_1.NotFound);
exports.default = app;
//# sourceMappingURL=app.js.map