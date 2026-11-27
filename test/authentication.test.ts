import assert = require("node:assert/strict");
import { once } from "node:events";
import type { AddressInfo } from "node:net";
import test = require("node:test");
import type { TestContext } from "node:test";
import express = require("express");
import bcrypt = require("bcryptjs");
import { AuthProvider, Role } from "../generated/prisma/enums";
import type { User } from "../generated/prisma/client";
import config from "../src/config";
import { googleClient } from "../src/lib/googleAuth";
import { prisma } from "../src/lib/prisma";
import { authRoutes } from "../src/modules/auth/auth.route";
import { authServices } from "../src/modules/auth/auth.service";
import { AppError } from "../src/utils/AppError";
import { jwtUtils } from "../src/utils/jwt";
import type { TokenPayload } from "google-auth-library";

const invalidCredentialsMessage = "Invalid email or password";
const googleClientId = "nagarlink-test-client-id";

const userRecord = (overrides: Partial<User> = {}): User => ({
  id: "citizen-1",
  name: "Test Citizen",
  email: "citizen@example.test",
  password: null,
  needPasswordChange: false,
  emailVerified: true,
  googleId: null,
  authProvider: AuthProvider.CREDENTIAL,
  phone: null,
  role: Role.CITIZEN,
  division: null,
  district: null,
  address: null,
  postalCode: null,
  isActive: true,
  isDeleted: false,
  deletedAt: null,
  createdAt: new Date(),
  updatedAt: new Date(),
  ...overrides,
});

function replaceMethod(
  context: TestContext,
  target: object,
  methodName: string,
  implementation: unknown,
) {
  const originalDescriptor = Object.getOwnPropertyDescriptor(
    target,
    methodName,
  );
  Object.defineProperty(target, methodName, {
    configurable: true,
    value: implementation,
    writable: true,
  });

  context.after(() => {
    if (originalDescriptor) {
      Object.defineProperty(target, methodName, originalDescriptor);
    } else {
      Reflect.deleteProperty(target, methodName);
    }
  });
}

function mockUserLookup(context: TestContext, user: User | null) {
  replaceMethod(context, prisma.user, "findUnique", async () => user);
}

function mockTokenCreation(context: TestContext) {
  const issuedTokens: string[] = [];
  replaceMethod(context, jwtUtils, "createToken", () => {
    issuedTokens.push("issued");
    return "test-token";
  });
  return issuedTokens;
}

function setGoogleClientId(context: TestContext, clientId: string) {
  const previousClientId = config.google_client_id;
  config.google_client_id = clientId;
  context.after(() => {
    config.google_client_id = previousClientId;
  });
}

function mockGoogleVerification(
  context: TestContext,
  payload: TokenPayload | undefined,
  error?: Error,
) {
  const audiences: unknown[] = [];
  replaceMethod(
    context,
    googleClient,
    "verifyIdToken",
    async (options: { audience: string }) => {
      audiences.push(options.audience);
      if (error) {
        throw error;
      }

      return {
        getPayload: () => payload,
      };
    },
  );
  return audiences;
}

function validGooglePayload(overrides: Partial<TokenPayload> = {}): TokenPayload {
  return {
    iss: "https://accounts.google.com",
    aud: googleClientId,
    iat: Math.floor(Date.now() / 1000),
    exp: Math.floor(Date.now() / 1000) + 300,
    sub: "google-subject-1",
    email: "citizen@example.test",
    email_verified: true,
    name: "Test Citizen",
    ...overrides,
  };
}

async function assertInvalidLogin(
  context: TestContext,
  user: User | null,
  password: string,
) {
  mockUserLookup(context, user);
  const issuedTokens = mockTokenCreation(context);

  await assert.rejects(
    authServices.loginUserService({
      email: "citizen@example.test",
      password,
    }),
    (error: unknown) => {
      if (!(error instanceof AppError)) {
        return false;
      }
      assert.equal(error.statusCode, 401);
      assert.equal(error.message, invalidCredentialsMessage);
      return true;
    },
  );
  assert.equal(issuedTokens.length, 0);
}

test("password login succeeds only when the submitted password matches", async (context) => {
  const password = "Correct-Horse-123";
  const hashedPassword = await bcrypt.hash(password, 4);
  mockUserLookup(context, userRecord({ password: hashedPassword }));
  const issuedTokens = mockTokenCreation(context);

  const result = await authServices.loginUserService({
    email: "  CITIZEN@EXAMPLE.TEST ",
    password,
  });

  assert.equal(result.accessToken, "test-token");
  assert.equal(result.refreshToken, "test-token");
  assert.equal(issuedTokens.length, 2);
});

test("incorrect password is rejected without issuing tokens", async (context: TestContext) => {
  const hashedPassword = await bcrypt.hash("Correct-Horse-123", 4);
  await assertInvalidLogin(
    context,
    userRecord({ password: hashedPassword }),
    "incorrect-password",
  );
});

test("nonexistent users receive the same authentication error", async (context: TestContext) => {
  await assertInvalidLogin(context, null, "any-password");
});

test("inactive users are rejected without disclosing their account status", async (context: TestContext) => {
  const hashedPassword = await bcrypt.hash("Correct-Horse-123", 4);
  await assertInvalidLogin(
    context,
    userRecord({ password: hashedPassword, isActive: false }),
    "Correct-Horse-123",
  );
});

test("deleted users are rejected without disclosing their account status", async (context: TestContext) => {
  const hashedPassword = await bcrypt.hash("Correct-Horse-123", 4);
  await assertInvalidLogin(
    context,
    userRecord({ password: hashedPassword, isDeleted: true }),
    "Correct-Horse-123",
  );
});

test("accounts without a password hash cannot use password login", async (context: TestContext) => {
  await assertInvalidLogin(
    context,
    userRecord({ password: null, googleId: "google-subject-1" }),
    "any-password",
  );
});

test("Google login verifies ID tokens against the configured client and preserves linked-account login", async (context: TestContext) => {
  setGoogleClientId(context, googleClientId);
  const audiences = mockGoogleVerification(context, validGooglePayload());
  mockUserLookup(
    context,
    userRecord({
      authProvider: AuthProvider.GOOGLE,
      googleId: "google-subject-1",
    }),
  );
  const issuedTokens = mockTokenCreation(context);

  const result = await authServices.googleLoginService({ idToken: "signed-id-token" });

  assert.deepEqual(audiences, [googleClientId]);
  assert.equal(result.accessToken, "test-token");
  assert.equal(result.refreshToken, "test-token");
  assert.equal(issuedTokens.length, 2);
});

test("invalid Google ID tokens do not issue authentication tokens", async (context: TestContext) => {
  setGoogleClientId(context, googleClientId);
  mockGoogleVerification(context, undefined, new Error("Invalid signature"));
  const issuedTokens = mockTokenCreation(context);

  await assert.rejects(
    authServices.googleLoginService({ idToken: "invalid-token" }),
    (error: unknown) => {
      if (!(error instanceof AppError)) {
        return false;
      }
      assert.equal(error.statusCode, 401);
      assert.equal(error.message, "Invalid Google ID token");
      return true;
    },
  );
  assert.equal(issuedTokens.length, 0);
});

test("expired Google claims are rejected", async (context: TestContext) => {
  setGoogleClientId(context, googleClientId);
  mockGoogleVerification(
    context,
    validGooglePayload({ exp: Math.floor(Date.now() / 1000) - 1 }),
  );
  await assert.rejects(
    authServices.googleLoginService({ idToken: "signed-id-token" }),
    (error: unknown) =>
      error instanceof AppError &&
      error.statusCode === 401 &&
      error.message === "Invalid Google ID token",
  );
});

test("Google claims with an untrusted issuer are rejected", async (context: TestContext) => {
  setGoogleClientId(context, googleClientId);
  mockGoogleVerification(
    context,
    validGooglePayload({ iss: "https://untrusted.example" }),
  );
  await assert.rejects(
    authServices.googleLoginService({ idToken: "signed-id-token" }),
    (error: unknown) =>
      error instanceof AppError &&
      error.statusCode === 401 &&
      error.message === "Invalid Google ID token",
  );
});

test("Google claims with the wrong audience are rejected", async (context: TestContext) => {
  setGoogleClientId(context, googleClientId);
  mockGoogleVerification(
    context,
    validGooglePayload({ aud: "another-client-id" }),
  );
  await assert.rejects(
    authServices.googleLoginService({ idToken: "signed-id-token" }),
    (error: unknown) =>
      error instanceof AppError &&
      error.statusCode === 401 &&
      error.message === "Invalid Google ID token",
  );
});

test("Google login rejects unverified email claims", async (context: TestContext) => {
  setGoogleClientId(context, googleClientId);
  mockGoogleVerification(
    context,
    validGooglePayload({ email_verified: false }),
  );
  const issuedTokens = mockTokenCreation(context);

  await assert.rejects(
    authServices.googleLoginService({ idToken: "signed-id-token" }),
    (error: unknown) =>
      error instanceof AppError &&
      error.statusCode === 401 &&
      error.message === "Invalid Google ID token",
  );
  assert.equal(issuedTokens.length, 0);
});

test("missing Google configuration fails safely before token verification", async (context: TestContext) => {
  setGoogleClientId(context, "");
  const audiences = mockGoogleVerification(context, validGooglePayload());
  const issuedTokens = mockTokenCreation(context);

  await assert.rejects(
    authServices.googleLoginService({ idToken: "signed-id-token" }),
    (error: unknown) =>
      error instanceof AppError &&
      error.statusCode === 503 &&
      error.message === "Google sign-in is unavailable",
  );
  assert.deepEqual(audiences, []);
  assert.equal(issuedTokens.length, 0);
});

test("Google authentication has one validated route and missing tokens are rejected before the controller", async (context: TestContext) => {
  setGoogleClientId(context, googleClientId);
  const audiences = mockGoogleVerification(
    context,
    undefined,
    new Error("Invalid signature"),
  );
  const issuedTokens = mockTokenCreation(context);

  const routerLayers = authRoutes.stack as unknown as Array<{
    route?: { methods?: Record<string, boolean>; path?: string };
  }>;
  const googleRoutes = routerLayers.filter(
    (layer) => layer.route?.path === "/google",
  );
  assert.equal(googleRoutes.length, 1);
  assert.equal(googleRoutes[0]?.route?.methods?.post, true);

  const app = express();
  app.use(express.json());
  app.use("/auth", authRoutes);
  app.use(
    (
      error: { statusCode?: number; message?: string },
      _request: express.Request,
      response: express.Response,
      _next: express.NextFunction,
    ) => {
      response
        .status(error.statusCode ?? 500)
        .json({ message: error.message });
    },
  );

  const server = app.listen(0, "127.0.0.1");
  await once(server, "listening");
  try {
    const address = server.address() as AddressInfo;
    const response = await fetch(
      `http://127.0.0.1:${address.port}/auth/google`,
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({}),
      },
    );
    assert.equal(response.status, 400);
    assert.deepEqual(audiences, []);

    const invalidTokenResponse = await fetch(
      `http://127.0.0.1:${address.port}/auth/google`,
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ idToken: "invalid-token" }),
      },
    );
    assert.equal(invalidTokenResponse.status, 401);
    assert.equal(invalidTokenResponse.headers.get("set-cookie"), null);
    assert.deepEqual(audiences, [googleClientId]);
    assert.equal(issuedTokens.length, 0);
  } finally {
    server.close();
    await once(server, "close");
  }
});

test("login rejects missing and incorrect passwords without setting authentication cookies", async (context: TestContext) => {
  const hashedPassword = await bcrypt.hash("Correct-Horse-123", 4);
  mockUserLookup(context, userRecord({ password: hashedPassword }));
  const issuedTokens = mockTokenCreation(context);

  const app = express();
  app.use(express.json());
  app.use("/auth", authRoutes);
  app.use(
    (
      error: { statusCode?: number; message?: string },
      _request: express.Request,
      response: express.Response,
      _next: express.NextFunction,
    ) => {
      response
        .status(error.statusCode ?? 500)
        .json({ message: error.message });
    },
  );

  const server = app.listen(0, "127.0.0.1");
  await once(server, "listening");
  try {
    const address = server.address() as AddressInfo;
    const response = await fetch(
      `http://127.0.0.1:${address.port}/auth/login`,
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email: "citizen@example.test" }),
      },
    );
    assert.equal(response.status, 400);
    assert.equal(response.headers.get("set-cookie"), null);

    const invalidPasswordResponse = await fetch(
      `http://127.0.0.1:${address.port}/auth/login`,
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          email: "citizen@example.test",
          password: "incorrect-password",
        }),
      },
    );
    assert.equal(invalidPasswordResponse.status, 401);
    assert.equal(invalidPasswordResponse.headers.get("set-cookie"), null);
    assert.equal(issuedTokens.length, 0);
  } finally {
    server.close();
    await once(server, "close");
  }
});
