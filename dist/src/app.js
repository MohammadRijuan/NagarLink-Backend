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