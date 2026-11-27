# NagarLink API Design & Documentation

This document describes the HTTP API currently defined by the Express route
modules. It is based on the source under `src/modules` and `src/app.ts`; the
route-wiring notes at the end identify endpoints that are declared but are not
currently reachable as intended.

## 1. Base URL and request conventions

Local base URL:

```text
http://localhost:5000/api/v1
```

For a deployed environment, replace the origin with the deployed API origin.
Unless an endpoint is a payment-provider callback or file upload:

- Send and receive JSON using `Content-Type: application/json`.
- Path IDs are UUIDs.
- Request bodies are validated with strict Zod schemas where indicated below.
  Unknown body fields are rejected.
- Authenticated requests may send the access token as
  `Authorization: Bearer <accessToken>`. The API also reads the `accessToken`
  cookie.
- Browser clients using cookies must send credentials with their requests.

Example:

```http
GET /api/v1/auth/me HTTP/1.1
Host: localhost:5000
Authorization: Bearer <accessToken>
```

## RESTful design and endpoint structure

The API is versioned under `/api/v1` and organized by domain resources:

```text
/api/v1/{resource}
/api/v1/{resource}/{id}
/api/v1/{resource}/{id}/{action}
```

Use HTTP methods to express the operation:

| Method | Intended use |
|---|---|
| `GET` | Read a resource or collection |
| `POST` | Create a resource or start a domain operation |
| `PATCH` | Partially update a resource or perform a state transition |
| `DELETE` | Remove a resource |

Prefer nouns for new resource paths and keep collection paths consistent. The
current API includes legacy/domain-specific action paths such as
`POST /payments/create`, `POST /quotation/select`, and
`PATCH /assignments/:id/review`; these are the implemented paths and must be
used by clients. A future breaking API version could normalize payment creation
to `POST /payments` and model quotation selection as a nested resource, but
those alternative paths are **not implemented**.

## OpenAPI and Postman assets

- [OpenAPI 3.0 specification](./docs/openapi.json) — import into Swagger Editor,
  Swagger UI, or Postman to browse and exercise the API.
- [Postman collection](./docs/postman/NagarLink.postman_collection.json) — core
  authentication, request, quotation, and payment workflow.
- [Local Postman environment](./docs/postman/NagarLink.local.postman_environment.json)
  — variable placeholders for a local instance; fill tokens and resource IDs
  after creating the corresponding records.

Import the collection and environment into Postman, choose the local
environment, and provide `email`, `password`, and `departmentId`. After email
verification or login, the collection saves the returned token to
`accessToken`. Use a citizen token for work requests, quotation selection, and
payments; use a staff token to submit quotations. Replace the single
`accessToken` value when switching accounts/roles.

Swagger UI is not currently mounted as an application route. To view the
specification interactively, open it in Swagger Editor or configure a local
Swagger UI instance to load `docs/openapi.json`.

## 2. Authentication and roles

The API uses these roles:

| Role | Typical capabilities |
|---|---|
| `CITIZEN` | Create service requests, select quotations, initiate payment, follow assignments, and submit feedback |
| `STAFF` | Respond to invitations, submit quotations, work on assigned jobs, and upload completion evidence |
| `MANAGER` | Coordinate staff and categories, review work, and manage selected operational resources |
| `ADMIN` | Platform-wide administration |

Most protected endpoints require a valid access token and one of the roles listed
in the endpoint table. Business services may additionally check resource
ownership or assignment membership.

Registration is a two-step process: submit registration details, then verify the
email OTP. OTPs expire after five minutes. Login and email verification return
tokens in the response and set HTTP-only cookies. The refresh endpoint reads the
`refreshToken` cookie.

## 3. Response format

Most endpoints using the shared response helper return:

```json
{
  "success": true,
  "statusCode": 200,
  "message": "Resource retrieved successfully",
  "data": {}
}
```

Paginated list responses may also include:

```json
{
  "success": true,
  "statusCode": 200,
  "message": "Resources retrieved successfully",
  "data": [],
  "meta": {
    "page": 1,
    "limit": 10,
    "total": 0,
    "totalPages": 0
  }
}
```

Errors use a common envelope:

```json
{
  "success": false,
  "statusCode": 400,
  "name": "Error",
  "message": "Validation error"
}
```

Validation errors are generally `400`; missing/invalid authentication is `401`;
insufficient role or ownership is `403`; missing resources are commonly `404`;
and business-state conflicts may return `400` or `409`. In development, the
error handler may include additional error and stack details. Production errors
are sanitized.

Payment callbacks are exceptions to the normal JSON response format: success,
failure, and cancellation callbacks redirect the browser to the configured
frontend. The IPN endpoint returns plain text.

## 4. Endpoint reference

`Base path` below is `/api/v1`. Unless an endpoint has a request-body schema
listed, it does not require a JSON body.

### Health

| Method | Path | Access | Request / result |
|---|---|---|---|
| `GET` | `/` | Public | Returns a small JSON health response. |

### Authentication — `/auth`

| Method | Path | Access | Request body / result |
|---|---|---|---|
| `POST` | `/auth/register` | Public | `name`, `email`, `password`; optional `phone`, `division`, `district`, `address`, `postalCode`. Starts email verification and returns `201`. |
| `POST` | `/auth/verify-email` | Public | `email`, six-digit `otp`. Verifies the account and returns user and tokens. |
| `POST` | `/auth/login` | Public | `email`, `password`. Returns access and refresh tokens. |
| `GET` | `/auth/me` | Any authenticated role | Returns the current user's profile. |
| `POST` | `/auth/refresh-token` | Refresh-token cookie | Reads `refreshToken` cookie and returns replacement tokens. |
| `POST` | `/auth/forgot-password` | Public | `email`. Sends a password-reset OTP. |
| `POST` | `/auth/reset-password` | Public | `email`, six-digit `otp`, `newPassword`. |
| `POST` | `/auth/google` | Public | `idToken`. The backend verifies the Google ID token against `GOOGLE_CLIENT_ID` before signing in or registering a citizen. |

Password length is 8–128 characters for registration and reset. Email input is
trimmed, lowercased, and validated.
The registration schema accepts optional location fields, but the current
verification service only persists the name, email, and phone from that
registration payload.

### Users — `/users`

| Method | Path | Access | Request body / result |
|---|---|---|---|
| `GET` | `/users` | `ADMIN` | List users. Supports list query parameters where implemented. |
| `GET` | `/users/all-staffs` | `ADMIN`, `MANAGER` | List staff. Supports list query parameters where implemented. |
| `GET` | `/users/:id` | `ADMIN` | Get a user by UUID. |
| `PATCH` | `/users/:id` | `ADMIN` | Any non-empty subset of `name`, `phone`, `role`, `isActive`, `needPasswordChange`. |
| `DELETE` | `/users/:id` | `ADMIN` | Delete a user. |

`role` is one of `ADMIN`, `MANAGER`, `STAFF`, or `CITIZEN`.

### Staff management — `/staff`

| Method | Path | Access | Request body / result |
|---|---|---|---|
| `GET` | `/staff` | `ADMIN`, `MANAGER` | List staff. Supports list query parameters where implemented. |
| `GET` | `/staff/:id` | `ADMIN`, `MANAGER` | Get staff by UUID. |
| `DELETE` | `/staff/:id` | `ADMIN`, `MANAGER` | Delete staff. |

### Staff applications — `/staff-application`

| Method | Path | Access | Request body / result |
|---|---|---|---|
| `POST` | `/staff-application` | `CITIZEN` | `experience` (integer, 0–80), `experienceDetails`, `division`, `district`, `address`, `postalCode`. |
| `GET` | `/staff-application` | `ADMIN`, `MANAGER` | List applications. Supports list query parameters where implemented. |
| `GET` | `/staff-application/:id` | `ADMIN`, `MANAGER` | Get an application by UUID. |
| `PATCH` | `/staff-application/:id` | `ADMIN` | Set `status` to `PENDING`, `APPROVED`, or `REJECTED`. |
| `DELETE` | `/staff-application/:id` | `ADMIN` | Delete an application. |

### Staff invitations — `/staff-invitation`

| Method | Path | Access | Request body / result |
|---|---|---|---|
| `POST` | `/staff-invitation` | `MANAGER`, `ADMIN` | `requestId`, `staffId` (UUIDs). |
| `GET` | `/staff-invitation` | `MANAGER`, `ADMIN` | List invitations. Supports list query parameters where implemented. |
| `GET` | `/staff-invitation/my-invitations` | `STAFF` | List invitations for the signed-in staff member. |
| `GET` | `/staff-invitation/:id` | `MANAGER`, `ADMIN`, `STAFF` | Get an invitation by UUID. |
| `PATCH` | `/staff-invitation/:id/respond` | `STAFF` | `status`: `ACCEPTED` or `REJECTED`; optional `responseNote`. |
| `DELETE` | `/staff-invitation/:id` | `MANAGER`, `ADMIN` | Delete an invitation. |

### Staff categories — `/staff-category`

| Method | Path | Access | Request body / result |
|---|---|---|---|
| `POST` | `/staff-category/:staffId/categories` | `ADMIN` | `categoryIds`: non-empty array of unique UUIDs. |
| `GET` | `/staff-category/:staffId/categories` | `ADMIN`, `MANAGER` | List categories assigned to a staff member. |
| `DELETE` | `/staff-category/:staffId/categories/:categoryId` | `ADMIN` | Remove a category assignment. |

### Work requests — `/work-request`

| Method | Path | Access | Request body / result |
|---|---|---|---|
| `POST` | `/work-request` | `CITIZEN` | `title`, `description`, `division`, `city`, `address`, `postalCode`, `phone`, `departmentId`. |
| `GET` | `/work-request` | `CITIZEN`, `MANAGER`, `ADMIN` | List work requests; results are subject to role/ownership rules. Supports list query parameters where implemented. |
| `GET` | `/work-request/:id` | `CITIZEN`, `MANAGER`, `ADMIN` | Get a request by UUID, subject to ownership/role rules. |
| `PATCH` | `/work-request/:id` | `CITIZEN` | Any non-empty subset of `title`, `description`, `division`, `city`, `postalCode`, `phone`. |
| `PATCH` | `/work-request/:id/status` | `MANAGER`, `ADMIN` | `status` and optional `rejectionReason`. |
| `DELETE` | `/work-request/:id` | `CITIZEN` | Delete a request, subject to ownership/business rules. |

Status values accepted by the status-update schema are:
`PENDING`, `REQUESTED`, `ACCEPTED`, `CITIZEN_ACCEPTED`, `CITIZEN_DECLINED`,
`ADVANCE_PAID`, `ASSIGNED`, `COMPLETED`, and `REJECTED`.

### Departments — `/departments`

| Method | Path | Access | Request body / result |
|---|---|---|---|
| `POST` | `/departments` | `ADMIN` | `name` (trimmed, 1–100 characters). |
| `GET` | `/departments` | `ADMIN`, `MANAGER` | List departments. |
| `GET` | `/departments/:id` | `ADMIN`, `MANAGER` | Get a department by UUID. |
| `PATCH` | `/departments/:id` | `ADMIN` | `name` (trimmed, 1–100 characters). |
| `DELETE` | `/departments/:id` | `ADMIN` | Delete a department. |

### Categories — `/categories`

| Method | Path | Access | Request body / result |
|---|---|---|---|
| `POST` | `/categories` | `ADMIN` | `name`, `departmentId` (UUID). |
| `GET` | `/categories` | `ADMIN`, `MANAGER` | List categories. |
| `GET` | `/categories/department/:departmentId` | `ADMIN`, `MANAGER` | List categories in a department. |
| `GET` | `/categories/:id` | `ADMIN`, `MANAGER` | Get a category by UUID. |
| `PATCH` | `/categories/:id` | `ADMIN` | `name`, `departmentId` (UUID). |
| `DELETE` | `/categories/:id` | `ADMIN` | Delete a category. |

### Quotations — `/quotation`

| Method | Path | Access | Request body / result |
|---|---|---|---|
| `POST` | `/quotation` | `STAFF` | `requestId` (UUID), `proposedFee` (positive finite number). |
| `POST` | `/quotation/select` | `CITIZEN` | `quotationId` (UUID). Selects a quotation; it does not itself call the payment gateway. |
| `GET` | `/quotation` | `ADMIN`, `MANAGER` | List quotations. Supports list query parameters where implemented. |
| `GET` | `/quotation/:id` | `STAFF`, `ADMIN`, `MANAGER` | Get a quotation by UUID. |
| `PATCH` | `/quotation/:id` | `STAFF` | Any non-empty subset of `proposedFee` (positive number) and `status` (`PENDING`, `APPROVED`, `REJECTED`). |
| `PATCH` | `/quotation/:id/status` | `ADMIN`, `MANAGER` | Set `status` to `PENDING`, `APPROVED`, or `REJECTED`. |
| `DELETE` | `/quotation/:id` | `ADMIN` | Delete a quotation. |

### Payments — `/payments`

| Method | Path | Access | Request body / result |
|---|---|---|---|
| `POST` | `/payments/create` | `CITIZEN` | `requestId` (UUID). Creates an SSLCommerz session and returns `paymentId`, `amount`, and `paymentUrl`. |
| `POST` | `/payments/success` | SSLCommerz callback | Receives gateway callback data, validates the transaction with SSLCommerz, then redirects to the frontend payment result page. |
| `POST` | `/payments/failure` | SSLCommerz callback | Processes a failed transaction and redirects to the frontend. |
| `POST` | `/payments/cancel` | SSLCommerz callback | Processes a cancelled transaction and redirects to the frontend. |
| `POST` | `/payments/ipn` | SSLCommerz server-to-server callback | Processes the IPN and returns plain text `IPN received`. |
| `PATCH` | `/payments/:id/approve` | `ADMIN`, `MANAGER` | Approves a payment held for review. |
| `GET` | `/payments/:id` | `CITIZEN`, `ADMIN`, `MANAGER` | Retrieve a payment, subject to ownership/role rules. |

Payment creation requires a selected quotation and an eligible work request.
The initial amount is 15% of the selected quotation and must be at least
10 BDT. Payment callbacks are not authenticated with a user token; transaction
status must be verified server-side before the work is treated as paid. Do not
use callback payloads alone as proof of payment.

The callback URLs are built from `APP_URL` as
`{APP_URL}/api/v1/payments/{success|failure|cancel|ipn}`. Configure `APP_URL` as
the public backend origin, without an extra `/api/v1` suffix. Browser redirects
use `FRONTEND_URL` and the paths `/payment/success`, `/payment/failed`,
`/payment/cancelled`, or `/payment/under-review`.

There is currently no retry-payment route registered in `payment.route.ts`.

### Assignments — `/assignments`

| Method | Path | Access | Request body / result |
|---|---|---|---|
| `GET` | `/assignments` | `CITIZEN`, `STAFF`, `MANAGER`, `ADMIN` | List assignments visible to the signed-in user. |
| `GET` | `/assignments/:id` | `CITIZEN`, `STAFF`, `MANAGER`, `ADMIN` | Get an assignment by UUID, subject to participation/role rules. |
| `PATCH` | `/assignments/:id/submit-completion` | `STAFF` | No body schema; assigned staff submits completion for review. The service requires at least one attachment. |
| `PATCH` | `/assignments/:id/review` | `MANAGER`, `ADMIN` | `status`: `COMPLETED` to approve or `ONGOING` to request corrections. |

### Work attachments — `/work-attachments` (wiring issue)

The route module declares the following intended operations:

| Method | Declared path | Access | Request body / result |
|---|---|---|---|
| `POST` | `/work-attachments/assignments/:assignmentId` | `STAFF` | Multipart form upload with file field `file`. |
| `GET` | `/work-attachments/assignments/:assignmentId` | `CITIZEN`, `STAFF`, `MANAGER`, `ADMIN` | List attachments for an assignment. |
| `GET` | `/work-attachments/:id` | `CITIZEN`, `STAFF`, `MANAGER`, `ADMIN` | Get an attachment by UUID. |
| `DELETE` | `/work-attachments/:id` | `STAFF`, `MANAGER`, `ADMIN` | Delete an attachment, subject to assignment/business rules. |

**These are not currently exposed as intended.** In `src/app.ts`,
`/api/v1/work-attachments` is mounted to `assignmentRoutes` instead of
`workAttachmentRoutes`. Requests under this prefix therefore invoke assignment
handlers, not the attachment operations above.

### Feedback — `/feedback` (not mounted)

The feedback route module declares:

| Method | Declared path | Access | Request body / result |
|---|---|---|---|
| `POST` | `/feedback` | `CITIZEN` | `assignmentId` (UUID), `rating` (integer 1–5), optional `comment` (up to 2000 characters). |
| `GET` | `/feedback/my-feedback` | `CITIZEN` | List feedback submitted by the signed-in citizen. |
| `GET` | `/feedback/staff/:staffId` | `STAFF`, `MANAGER`, `ADMIN` | Get feedback for a staff member. |
| `GET` | `/feedback` | `MANAGER`, `ADMIN` | List all feedback. |

**These routes are not currently exposed.** `feedbackRoutes` is not mounted in
`src/app.ts`. The service additionally requires the assignment to be completed
and limits each assignment to one feedback record.

## 5. List query parameters

Several list services support some or all of these query parameters:

| Parameter | Meaning | Default where implemented |
|---|---|---|
| `page` | One-based page number | `1` |
| `limit` | Page size | `10` |
| `sortBy` | Sort field | `createdAt` |
| `sortOrder` | Sort direction | `desc` |
| `searchTerm` | Search text | No search filter |

Pagination and sorting are used by selected user, staff, staff-application,
work-request, quotation, and staff-invitation list operations. `searchTerm` is
implemented only by some of those lists; for example, quotation listing does
not currently apply it. Query parameters are not currently validated by the
shared Zod middleware, and supported fields can vary by operation.

## 6. Core request examples

Select a quotation as the citizen who owns the work request:

```http
POST /api/v1/quotation/select HTTP/1.1
Host: localhost:5000
Authorization: Bearer <citizenAccessToken>
Content-Type: application/json

{
  "quotationId": "<quotation-uuid>"
}
```

Then create an SSLCommerz payment session for the selected request:

```http
POST /api/v1/payments/create HTTP/1.1
Host: localhost:5000
Authorization: Bearer <citizenAccessToken>
Content-Type: application/json

{
  "requestId": "<work-request-uuid>"
}
```

The successful response's `data.paymentUrl` is the gateway URL to open. The
backend—not the browser—verifies the SSLCommerz transaction before creating the
assignment.

## 7. Typical workflow

1. Register with `POST /auth/register`, then verify the email with
   `POST /auth/verify-email`.
2. Create a request with `POST /work-request`.
3. Staff applies/gets approved as appropriate, receives an invitation, and
   submits a quotation with `POST /quotation`.
4. The citizen selects a quotation using `POST /quotation/select`.
5. The citizen creates the advance-payment session with
   `POST /payments/create` and opens the returned `paymentUrl`.
6. SSLCommerz calls the configured success/failure/cancel and IPN endpoints.
   The backend verifies payment server-to-server before marking it paid and
   creating the assignment.
7. Assigned staff performs the work, uploads evidence, then calls
   `PATCH /assignments/:id/submit-completion`.
8. A manager/admin approves or requests corrections with
   `PATCH /assignments/:id/review`.
9. After feedback routes are mounted, the citizen can submit feedback for the
   completed assignment.

## 8. Current route-wiring caveats

- `feedbackRoutes` is not mounted in `src/app.ts`.
- `/api/v1/work-attachments` currently mounts `assignmentRoutes`, not
  `workAttachmentRoutes`.
- The root handler in `src/app.ts` is mounted at `/` before the not-found
  middleware. As written, it can respond to unmatched paths as well as `/`;
  clients should use the documented routes rather than treating every
  successful root response as proof that a path exists.
- `POST /auth/google` has a route and validation schema but its controller is
  currently an empty stub.
- A retry-payment endpoint is not registered in the current payment router.

These are source-code observations, not additional endpoints.
