"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("./config"));
const app_1 = __importDefault(require("./app"));
const prisma_1 = require("./lib/prisma");
const seed_1 = require("./utils/seed");
const redis_1 = require("./lib/redis");
const port = config_1.default.port;
const main = async () => {
    try {
        prisma_1.prisma.$connect();
        console.log("Database connected successfully");
        await redis_1.redisClient.connect();
        console.log("redis connected successfully");
        (0, seed_1.seedAdmin)();
        (0, seed_1.seedManager)();
        (0, seed_1.seedStaff)();
        app_1.default.listen(port, () => {
            console.log(`NagarLink app is running on port : ${port}`);
        });
    }
    catch (error) {
        console.log("database disconnected", error);
        prisma_1.prisma.$disconnect();
    }
};
main();
//# sourceMappingURL=server.js.map