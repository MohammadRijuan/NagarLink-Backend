import type { Request } from "express";
import config from "./config";
import app from "./app";
import { prisma } from "./lib/prisma";
import { seedAdmin, seedManager, seedStaff } from "./utils/seed";
import { redisClient } from "./lib/redis";

const port = config.port;

const main = async () => {
  try {
    prisma.$connect();
    console.log("Database connected successfully");

    await redisClient.connect();
    console.log("redis connected successfully");

    seedAdmin();
    seedManager();
    seedStaff();

    app.listen(port, () => {
      console.log(`NagarLink app is running on port : ${port}`);
    });
  } catch (error) {
    console.log("database disconnected", error);
    prisma.$disconnect();
  }
};

main();
