import assert = require("node:assert/strict");
import { once } from "node:events";
import type { AddressInfo } from "node:net";
import test = require("node:test");
import express = require("express");
import { PaymentStatus, Role } from "../generated/prisma/enums";
import {
  createCorsMiddleware,
  enforceAllowedOrigins,
  parseFrontendOrigins,
} from "../src/config/cors";
import { authorizeAuthenticatedUser } from "../src/middlewares/authPolicy";
import {
  projectAssignmentContacts,
  projectQuotationContacts,
  projectSelectedQuotation,
  projectWorkRequestContact,
} from "../src/utils/contactPrivacy";

const userRecord = (overrides: Partial<{
  isActive: boolean;
  isDeleted: boolean;
  role: Role;
}> = {}) => ({
  id: "staff-1",
  email: "staff@example.test",
  name: "Assigned Staff",
  role: Role.STAFF,
  isActive: true,
  isDeleted: false,
  ...overrides,
});

const viewer = (userId: string, role: Role) => ({
  userId,
  role,
  name: "Test User",
  email: "test@example.test",
});

const assignment = (paid: boolean) => ({
  id: "assignment-1",
  staffId: "staff-1",
  citizenId: "citizen-1",
  staff: { id: "staff-1", name: "Assigned Staff", phone: "staff-phone" },
  citizen: {
    id: "citizen-1",
    name: "Assigned Citizen",
    phone: "citizen-phone",
  },
  request: {
    id: "request-1",
    phone: "request-phone",
    payments: paid ? [{ status: PaymentStatus.PAID }] : [],
  },
});

test("auth policy rejects missing, inactive, and deleted users", () => {
  assert.throws(
    () => authorizeAuthenticatedUser(null, []),
    (error: unknown) =>
      typeof error === "object" &&
      error !== null &&
      "statusCode" in error &&
      error.statusCode === 401,
  );
  assert.throws(
    () =>
      authorizeAuthenticatedUser(
        userRecord({ isActive: false }),
        [Role.STAFF],
      ),
    (error: unknown) =>
      typeof error === "object" &&
      error !== null &&
      "statusCode" in error &&
      error.statusCode === 403,
  );
  assert.throws(
    () =>
      authorizeAuthenticatedUser(
        userRecord({ isDeleted: true }),
        [Role.STAFF],
      ),
    (error: unknown) =>
      typeof error === "object" &&
      error !== null &&
      "statusCode" in error &&
      error.statusCode === 403,
  );
});

test("auth policy applies the current database role and preserves valid access", () => {
  assert.throws(
    () =>
      authorizeAuthenticatedUser(
        userRecord({ role: Role.CITIZEN }),
        [Role.STAFF],
      ),
    (error: unknown) =>
      typeof error === "object" &&
      error !== null &&
      "statusCode" in error &&
      error.statusCode === 403,
  );

  assert.deepEqual(
    authorizeAuthenticatedUser(userRecord(), [Role.STAFF]),
    {
      userId: "staff-1",
      email: "staff@example.test",
      name: "Assigned Staff",
      role: Role.STAFF,
    },
  );
});

test("assignment phone projections require verified payment and assigned role", () => {
  const unpaid = assignment(false);
  const citizenBeforePayment = projectAssignmentContacts(
    unpaid,
    viewer("citizen-1", Role.CITIZEN),
  );
  assert.equal("phone" in citizenBeforePayment.staff, false);
  assert.equal("phone" in citizenBeforePayment.citizen, false);
  assert.equal("phone" in citizenBeforePayment.request, false);

  const paid = assignment(true);
  const citizenAfterPayment = projectAssignmentContacts(
    paid,
    viewer("citizen-1", Role.CITIZEN),
  );
  assert.equal(citizenAfterPayment.staff.phone, "staff-phone");
  assert.equal("phone" in citizenAfterPayment.citizen, false);
  assert.equal("phone" in citizenAfterPayment.request, false);

  const staffAfterPayment = projectAssignmentContacts(
    paid,
    viewer("staff-1", Role.STAFF),
  );
  assert.equal(staffAfterPayment.citizen.phone, "citizen-phone");
  assert.equal(staffAfterPayment.request.phone, "request-phone");
  assert.equal("phone" in staffAfterPayment.staff, false);

  const unrelatedManager = projectAssignmentContacts(
    paid,
    viewer("manager-1", Role.MANAGER),
  );
  assert.equal("phone" in unrelatedManager.staff, false);
  assert.equal("phone" in unrelatedManager.citizen, false);
  assert.equal("phone" in unrelatedManager.request, false);
});

test("quotation details and selection never disclose staff phone", () => {
  const quotation = (paid: boolean) => ({
    id: "quotation-1",
    staff: {
      id: "staff-1",
      name: "Assigned Staff",
      phone: "staff-phone",
      password: "must-not-return",
    },
    request: {
      id: "request-1",
      phone: "citizen-phone",
      payments: paid ? [{ status: PaymentStatus.PAID }] : [],
      assignment: paid ? { staffId: "staff-1" } : null,
    },
  });

  const staffBeforePayment = projectQuotationContacts(
    quotation(false),
    viewer("staff-1", Role.STAFF),
  );
  assert.equal("phone" in staffBeforePayment.staff, false);
  assert.equal("password" in staffBeforePayment.staff, false);
  assert.equal("phone" in staffBeforePayment.request, false);

  const assignedStaffAfterPayment = projectQuotationContacts(
    quotation(true),
    viewer("staff-1", Role.STAFF),
  );
  assert.equal("phone" in assignedStaffAfterPayment.staff, false);
  assert.equal(assignedStaffAfterPayment.request.phone, "citizen-phone");

  const unrelatedStaffAfterPayment = projectQuotationContacts(
    quotation(true),
    viewer("staff-2", Role.STAFF),
  );
  assert.equal("phone" in unrelatedStaffAfterPayment.staff, false);
  assert.equal("phone" in unrelatedStaffAfterPayment.request, false);

  const selected = projectSelectedQuotation({
    staff: {
      id: "staff-1",
      phone: "staff-phone",
      password: "must-not-return",
    },
    request: { id: "request-1", phone: "citizen-phone" },
  });
  assert.equal("phone" in selected.staff, false);
  assert.equal("password" in selected.staff, false);
  assert.equal("phone" in selected.request, false);
});

test("work requests expose a phone only to their citizen owner", () => {
  const request = {
    id: "request-1",
    phone: "citizen-phone",
  };

  assert.deepEqual(
    projectWorkRequestContact(
      request,
      viewer("citizen-1", Role.CITIZEN),
    ),
    request,
  );
  assert.equal(
    "phone" in
      projectWorkRequestContact(
        request,
        viewer("manager-1", Role.MANAGER),
      ),
    false,
  );
  assert.equal(
    "phone" in
      projectWorkRequestContact(
        request,
        viewer("admin-1", Role.ADMIN),
      ),
    false,
  );
});

test("credentialed CORS reflects only explicitly configured frontend origins", async () => {
  const origins = parseFrontendOrigins(
    "https://nagarlink.example/",
    "https://admin.nagarlink.example, http://localhost:3000",
  );
  assert.deepEqual(origins, [
    "https://nagarlink.example",
    "https://admin.nagarlink.example",
    "http://localhost:3000",
  ]);
  assert.throws(() => parseFrontendOrigins(undefined, undefined));
  assert.throws(() =>
    parseFrontendOrigins("https://nagarlink.example/path", undefined),
  );

  const app = express();
  app.use(createCorsMiddleware(origins));
  app.use(enforceAllowedOrigins(origins));
  app.get("/resource", (_request, response) => {
    response.json({ ok: true });
  });
  app.post("/resource", (_request, response) => {
    response.json({ ok: true });
  });
  app.use((error: { statusCode?: number }, _request: express.Request, response: express.Response, _next: express.NextFunction) => {
    response.status(error.statusCode ?? 500).json({ success: false });
  });

  const server = app.listen(0, "127.0.0.1");
  await once(server, "listening");
  try {
    const address = server.address() as AddressInfo;
    const url = `http://127.0.0.1:${address.port}/resource`;
    const trusted = await fetch(url, {
      headers: { Origin: "https://nagarlink.example" },
    });
    assert.equal(
      trusted.headers.get("access-control-allow-origin"),
      "https://nagarlink.example",
    );
    assert.equal(
      trusted.headers.get("access-control-allow-credentials"),
      "true",
    );

    const untrusted = await fetch(url, {
      headers: { Origin: "https://untrusted.example" },
    });
    assert.equal(
      untrusted.headers.get("access-control-allow-origin"),
      null,
    );

    const blockedMutation = await fetch(url, {
      method: "POST",
      headers: { Origin: "https://untrusted.example" },
    });
    assert.equal(blockedMutation.status, 403);

    const trustedMutation = await fetch(url, {
      method: "POST",
      headers: { Origin: "https://nagarlink.example" },
    });
    assert.equal(trustedMutation.status, 200);
  } finally {
    server.close();
    await once(server, "close");
  }
});

test("feedback endpoints are mounted behind authentication", async () => {
  const previousFrontendUrl = process.env.FRONTEND_URL;
  const previousNodeEnv = process.env.NODE_ENV;
  process.env.FRONTEND_URL ??= "http://localhost:3000";
  process.env.NODE_ENV = "production";

  try {
    const { default: api } = await import("../src/app");
    const server = api.listen(0, "127.0.0.1");
    await once(server, "listening");
    try {
      const address = server.address() as AddressInfo;
      const response = await fetch(
        `http://127.0.0.1:${address.port}/api/v1/feedback`,
        { method: "POST" },
      );
      assert.equal(response.status, 401);
    } finally {
      server.close();
      await once(server, "close");
    }
  } finally {
    if (previousFrontendUrl === undefined) {
      delete process.env.FRONTEND_URL;
    } else {
      process.env.FRONTEND_URL = previousFrontendUrl;
    }
    if (previousNodeEnv === undefined) {
      delete process.env.NODE_ENV;
    } else {
      process.env.NODE_ENV = previousNodeEnv;
    }
  }
});
