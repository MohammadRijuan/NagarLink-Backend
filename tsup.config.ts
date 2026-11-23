// tsup.config.ts
import { defineConfig } from "tsup";

export default defineConfig([
  {
    entry: ["src/server.ts"],
    format: ["cjs"],
    outDir: "dist",
    outExtension: () => ({ js: ".cjs" }),
    clean: true,
  },
  {
    entry: { index: "api/_handler.ts" }, 
    format: ["esm"],
    outDir: "api",
    outExtension: () => ({ js: ".js" }),
    bundle: true,
  },
]);