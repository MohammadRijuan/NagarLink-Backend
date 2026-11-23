"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("./lib/prisma");
const seed_1 = require("./utils/seed");
const redis_1 = require("./lib/redis");
// const port = config.port;
const main = async () => {
    try {
        prisma_1.prisma.$connect();
        console.log("Database connected successfully");
        await redis_1.redisClient.connect();
        console.log("redis connected successfully");
        (0, seed_1.seedAdmin)();
        (0, seed_1.seedManager)();
        (0, seed_1.seedStaff)();
        // app.listen(port, () => {
        //   console.log(`NagarLink app is running on port : ${port}`);
        // });
    }
    catch (error) {
        console.log("database disconnected", error);
        prisma_1.prisma.$disconnect();
        process.exit(1);
    }
};
main();
//# sourceMappingURL=server.js.map