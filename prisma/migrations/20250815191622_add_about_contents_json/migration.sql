/*
  Warnings:

  - You are about to drop the column `content_en` on the `About` table. All the data in the column will be lost.
  - You are about to drop the column `content_tr` on the `About` table. All the data in the column will be lost.
  - Added the required column `contents` to the `About` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."About" DROP COLUMN "content_en",
DROP COLUMN "content_tr",
ADD COLUMN     "contents" JSONB NOT NULL;
