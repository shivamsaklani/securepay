/*
  Warnings:

  - A unique constraint covering the columns `[account_number]` on the table `Account` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `account_number` to the `Account` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Account" ADD COLUMN     "account_number" TEXT NOT NULL,
ALTER COLUMN "balance" SET DEFAULT 0.0;

-- CreateIndex
CREATE UNIQUE INDEX "Account_account_number_key" ON "Account"("account_number");
