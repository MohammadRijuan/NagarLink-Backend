import { defineConfig } from "tsup";

export default defineConfig([
  // 1) local / VPS build  ->  npm start
  {
    entry: ["src/server.ts"],
    format: ["cjs"],
    target: "node20",
    outDir: "dist",
    outExtension: () => ({ js: ".cjs" }),
    clean: true,
    bundle: true,
    splitting: false,
    sourcemap: true,
  },
  // 2) Vercel serverless function  ->  api/index.js
  //    src/** and generated/prisma are inlined, node_modules stay external
  //    (Vercel installs + traces them). This removes every ESM/TS resolution problem.
  {
    entry: { index: "src/vercel.ts" },
    format: ["cjs"],
    target: "node20",
    outDir: "api",
    outExtension: () => ({ js: ".js" }),
    clean: true,
    bundle: true,
    splitting: false,
    sourcemap: false,
    shims: true,
  },
]);
