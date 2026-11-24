import { createClient } from "redis";
import config from "../config";

export const redisClient = createClient({
  username: config.redis_user,
  password: config.redis_password,
  socket: {
    host: config.redis_host,
    port: Number(config.redis_port),
    connectTimeout: 5000,
    // Give up quickly instead of retrying forever inside a serverless function
    reconnectStrategy: (retries: number) =>
      retries > 3 ? new Error("Redis unreachable") : Math.min(retries * 200, 1000),
  },
});

// IMPORTANT: without this listener, any Redis connection error is an
// "unhandled error event" and Node kills the process (FUNCTION_INVOCATION_FAILED).
redisClient.on("error", (error) => {
  console.error("Redis client error:", error.message);
});
