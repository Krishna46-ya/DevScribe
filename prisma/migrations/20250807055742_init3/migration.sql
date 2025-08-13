/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `user` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "public"."user_name_key";

-- AlterTable
ALTER TABLE "public"."user" ADD COLUMN     "email" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "public"."userGoogle" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "picture" TEXT NOT NULL,

    CONSTRAINT "userGoogle_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "userGoogle_id_key" ON "public"."userGoogle"("id");

-- CreateIndex
CREATE UNIQUE INDEX "userGoogle_email_key" ON "public"."userGoogle"("email");

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "public"."user"("email");
