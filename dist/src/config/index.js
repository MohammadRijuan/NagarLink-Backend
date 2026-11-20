"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config({
    path: path_1.default.join(process.cwd(), ".env"),
});
exports.default = {
    port: process.env.PORT,
    database_url: process.env.DATABASE_URL,
    node_env: process.env.NODE_ENV,
    app_url: process.env.APP_URL,
    jwt_access_token: process.env.JWT_ACCESS_SECRET,
    jwt_access_expires_in: process.env.JWT_ACCESS_EXPIRES_IN,
    jwt_refresh_token: process.env.JWT_REFRESH_SECRET,
    jwt_refresh_expires_in: process.env.JWT_REFRESH_EXPIRES_IN,
    bcrypt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS,
    tester_admin_name: process.env.ADMIN_NAME,
    tester_admin_email: process.env.ADMIN_EMAIL,
    tester_admin_password: process.env.ADMIN_PASSWORD,
    tester_manager_name: process.env.MANAGER_NAME,
    tester_manager_email: process.env.MANAGER_EMAIL,
    tester_manager_password: process.env.MANAGER_PASSWORD,
    tester_staff_name: process.env.STAFF_NAME,
    tester_staff_email: process.env.STAFF_EMAIL,
    tester_staff_password: process.env.STAFF_PASSWORD,
    redis_user: process.env.REDIS_USER,
    redis_password: process.env.REDIS_PASSWORD,
    redis_host: process.env.REDIS_HOST,
    redis_port: process.env.REDIS_PORT,
    smtp_user: process.env.SMTP_USER,
    smtp_password: process.env.SMTP_PASSWORD,
    email_sender: process.env.EMAIL_SENDER,
    cloudinary_cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    cloudinary_api_key: process.env.CLOUDINARY_API_KEY,
    cloudinary_api_secret: process.env.CLOUDINARY_API_SECRET,
    bkash_base_url: process.env.BKASH_BASE_URL,
    bkash_username: process.env.BKASH_USERNAME,
    bkash_password: process.env.BKASH_PASSWORD,
    bkash_app_key: process.env.BKASH_APP_KEY,
    bkash_app_secret: process.env.BKASH_APP_SECRET,
    bkash_callback_url: process.env.BKASH_CALLBACK_URL,
};
//# sourceMappingURL=index.js.map