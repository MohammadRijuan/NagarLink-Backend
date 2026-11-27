# NagarLink

NagarLink is a service-request and work-management platform connecting citizens with assigned service staff through a structured workflow. Citizens can request services, review quotations, pay an advance, track assignments, view attachments, and submit feedback after completion.

## Core Features
- Role-based access: Admin, Manager, Staff, Citizen
- Work requests and department selection
- Staff applications, categories, and invitations
- Quotation submission and citizen quotation selection
- SSLCommerz advance payment (15%)
- Assignment creation after verified payment
- Work attachments uploaded to Cloudinary
- Completion submission and manager/admin review
- Citizen feedback after successful completion

## Technology Stack
- Node.js, Express.js, TypeScript
- PostgreSQL, Prisma ORM
- Redis
- JWT
- Cloudinary, Multer
- SSLCommerz

## Roles
| Role | Responsibilities |
|---|---|
| `CITIZEN` | Create requests, select quotations, pay advance, track work, submit feedback |
| `STAFF` | Respond to invitations, submit quotations, perform work, upload attachments, submit completion |
| `MANAGER` | Coordinate categories/staff and review submitted work |
| `ADMIN` | Platform administration and privileged oversight |

## Complete Workflow

```mermaid
flowchart TD
    A[Citizen creates Work Request] --> B[Select Department]
    B --> C[Manager assigns Category]
    C --> D[Manager invites eligible Staff]
    D --> E{Staff response}
    E -->|Reject| F[Invitation rejected]
    E -->|Accept| G[Staff submits Quotation]
    G --> H[Citizen reviews Quotations]
    H --> I[Citizen selects Quotation]
    I --> J[Citizen pays 15% advance via SSLCommerz]
    J --> K{Payment verified?}
    K -->|No| L[Failed, pending or review state]
    K -->|Yes| M[Assignment created]
    M --> N[Staff performs work]
    N --> O[Staff uploads attachments]
    O --> P[Staff submits completion]
    P --> Q[Manager/Admin reviews]
    Q --> R{Approved?}
    R -->|No| S[Return to ONGOING for corrections]
    S --> N
    R -->|Yes| T[Assignment COMPLETED]
    T --> U[Citizen submits feedback]
```

### Workflow stages

1. **Work Request:** Citizen creates a request and selects a department.
2. **Category assignment:** Manager assigns the appropriate category.
3. **Staff invitation:** Manager invites suitable staff; staff accept or reject.
4. **Quotation:** Invited staff submit quotations. Citizen reviews and selects one.
5. **Advance payment:** Citizen pays 15% of the accepted quotation through SSLCommerz. The backend verifies the transaction.
6. **Assignment:** Only after successful payment verification does the system create the assignment. The assignment starts as `ONGOING`.
7. **Work and attachments:** Staff performs the work and uploads supporting files while the assignment is `ONGOING`. Files are stored in Cloudinary and metadata in PostgreSQL.
8. **Completion submission:** Staff submits work for review. At least one attachment is required by the completion-submission service. Status becomes `COMPLETION_SUBMITTED`.
9. **Review:** Manager/Admin approves (`COMPLETED`) or requests correction (`ONGOING`).
10. **Feedback:** After completion, the citizen submits a rating (integer 1–5) and optional comment. Each assignment can have one feedback record.

## Assignment Status Flow

Successful path:

`ONGOING → COMPLETION_SUBMITTED → COMPLETED`

Correction path:

`ONGOING → COMPLETION_SUBMITTED → ONGOING`

## Feedback Rules
- Assignment must be `COMPLETED`.
- Only the citizen associated with the assignment can submit feedback.
- Rating is an integer from 1 to 5.
- Comment is optional.
- One feedback per assignment (`assignmentId` is unique).

## Work Attachment Rules
- Only the assigned staff member can upload files.
- Uploads are permitted while the assignment is `ONGOING`.
- Participants and Manager/Admin can view attachments, subject to authorization.
- Staff upload/delete permissions are restricted by assignment state and service rules.
- Cloudinary stores the file; PostgreSQL stores its metadata.

## Payment Rules
- Advance is 15% of the selected quotation.
- Payment must be verified server-side before an assignment is created.
- Failed, unverified, or review-pending payments must not be treated as paid.
- The remaining balance is handled separately according to the project's payment policy.

## Project Structure

Modular layout (illustrative):

```text
src/
├── config/
├── lib/
├── middlewares/
├── utils/
└── modules/
    ├── assignment/
    ├── feedback/
    ├── workAttachment/
    ├── workRequest/
    ├── quotation/
    ├── payment/
    ├── staffInvitation/
    ├── staffApplication/
    ├── department/
    ├── category/
    └── ...
```

Typical module:

```text
moduleName/
├── moduleName.interface.ts
├── moduleName.service.ts
├── moduleName.controller.ts
└── moduleName.route.ts
```

Services contain business logic, controllers handle HTTP request/response, routes apply authentication/authorization, and interfaces define payload types.

## API
API prefix: `/api/v1`

Specific endpoints are defined by the registered module routes in the current source code.

## Local Setup

### Prerequisites
- Node.js and npm
- PostgreSQL
- Redis (if required by the configured services)
- Cloudinary credentials
- SSLCommerz sandbox credentials

### Install

```bash
git clone <repository-url>
cd NagarLink-Backend
npm install
```

### Environment

Create a `.env` file and fill in values required by the project's configuration. Example placeholders:

```env
PORT=5000
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=public"
REDIS_URL="redis://localhost:6379"

APP_URL="http://localhost:5000"
FRONTEND_URL="http://localhost:3000"
# Optional comma-separated additional browser origins for credentialed CORS.
FRONTEND_ORIGINS=""

JWT_ACCESS_SECRET="replace-with-secret"
JWT_REFRESH_SECRET="replace-with-secret"

CLOUDINARY_CLOUD_NAME=""
CLOUDINARY_API_KEY=""
CLOUDINARY_API_SECRET=""

SSL_STORE_ID=""
SSL_STORE_PASSWORD=""
SSL_BASE_URL="https://sandbox.sslcommerz.com"
SSL_IS_LIVE="false"
```

Use the exact variable names required by your config; never commit real secrets.

### Prisma

```bash
npx prisma validate
npx prisma generate
npx prisma migrate dev
```

### Run

Use the development script configured in `package.json` (commonly):

```bash
npm run dev
```

Local API URL:

```text
http://localhost:5000
```

## Security Notes
- Enforce role-based access checks.
- Verify SSLCommerz payments server-side before marking payments paid or creating assignments.
- Never return password fields in public responses.
- Keep credentials out of version control.
- Validate file size, MIME type, and content before production.
- Restrict attachment access to authorized assignment participants and management roles.
- Handle database uniqueness errors gracefully.
- Payment callbacks/IPN require a public backend URL; a local-only localhost server cannot receive provider callbacks directly.

## Development Status
Implemented or in progress:
- Work Request
- Staff Application
- Department and Category
- Staff Invitation
- Quotation
- SSLCommerz Payment
- Assignment
- Work Attachment
- Completion and Review
- Feedback

Notifications are planned for later.

## License
Add the selected license before public distribution.
