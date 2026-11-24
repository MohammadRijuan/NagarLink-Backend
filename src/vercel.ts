import type { IncomingMessage, ServerResponse } from "http";
import app from "./app";
import { redisClient } from "./lib/redis";

/**
 * Vercel serverless entry.
 *
 * server.ts is only used locally (app.listen + redis connect + seeding).
 * On Vercel nothing calls redisClient.connect(), so we connect lazily here,
 * once per warm instance, and then hand the request to the Express app.
 */
let redisReady: Promise<void> | null = null;

const connectRedis = () => {
  if (redisClient.isOpen) return Promise.resolve();

  if (!redisReady) {
    redisReady = redisClient
      .connect()
      .then(() => {
        console.log("redis connected successfully");
      })
      .catch((error) => {
        redisReady = null; // allow a retry on the next request
        throw error;
      });
  }

  return redisReady;
};

export default async function handler(req: IncomingMessage, res: ServerResponse) {
  try {
    await connectRedis();
  } catch (error) {
    // Do not kill the whole API if Redis is down - routes that don't use Redis
    // keep working; routes that do will return a normal JSON error.
    console.error("Redis connection failed:", (error as Error).message);
  }

  return (app as unknown as (req: IncomingMessage, res: ServerResponse) => void)(req, res);
}
