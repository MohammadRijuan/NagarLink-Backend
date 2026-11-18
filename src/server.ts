import type { Request } from "express";
import config from "./config";
import app from "./app";
import { prisma } from "./lib/prisma";

const port = config.port;

const main = async () => {
  try {
    prisma.$connect();
    console.log("Database connected successfully")
    app.listen(port, () => {
      console.log(`NagarLink app is running on port : ${port}`);
    });
  } catch (error) {
    console.log("database disconnected", error);
    prisma.$disconnect();
  }
};

main();
