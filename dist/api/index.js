"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = handler;
const app_1 = __importDefault(require("../src/app"));
const prisma_1 = require("../src/lib/prisma");
const redis_1 = require("../src/lib/redis");
let runtimeReady;
const initializeRuntime = () => {
    if (!runtimeReady) {
        runtimeReady = Promise.all([
            prisma_1.prisma.$connect(),
            redis_1.redisClient.isOpen ? Promise.resolve() : redis_1.redisClient.connect(),
        ])
            .then(() => undefined)
            .catch((error) => {
            runtimeReady = undefined;
            throw error;
        });
    }
    return runtimeReady;
};
async function handler(req, res) {
    await initializeRuntime();
    (0, app_1.default)(req, res);
}
//# sourceMappingURL=index.js.map