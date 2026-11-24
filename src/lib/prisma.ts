import * as dotenv from "dotenv";

dotenv.config();
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../../generated/prisma/client";

const connectionString = `${process.env.DATABASE_URL}`;

// Every serverless instance opens its own pool, so keep it tiny on Vercel.
const adapter = new PrismaPg({
  connectionString,
  max: process.env.VERCEL ? 1 : 10,
});
const prisma = new PrismaClient({ adapter });

export { prisma };
