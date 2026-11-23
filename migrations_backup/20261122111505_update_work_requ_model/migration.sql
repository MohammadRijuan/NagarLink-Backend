-- DropForeignKey
ALTER TABLE "work_requests" DROP CONSTRAINT "work_requests_citizenId_fkey";

-- AddForeignKey
ALTER TABLE "work_requests" ADD CONSTRAINT "work_requests_citizenId_fkey" FOREIGN KEY ("citizenId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
