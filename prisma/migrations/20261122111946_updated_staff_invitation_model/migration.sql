/*
  Warnings:

  - A unique constraint covering the columns `[requestId,staffId]` on the table `staff_invitations` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "staff_invitations" DROP CONSTRAINT "staff_invitations_staffId_fkey";

-- CreateIndex
CREATE UNIQUE INDEX "staff_invitations_requestId_staffId_key" ON "staff_invitations"("requestId", "staffId");

-- AddForeignKey
ALTER TABLE "staff_invitations" ADD CONSTRAINT "staff_invitations_staffId_fkey" FOREIGN KEY ("staffId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
