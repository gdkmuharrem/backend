/*
  Warnings:

  - You are about to drop the column `content_en` on the `Mision` table. All the data in the column will be lost.
  - You are about to drop the column `content_tr` on the `Mision` table. All the data in the column will be lost.
  - You are about to drop the column `content_en` on the `Vision` table. All the data in the column will be lost.
  - You are about to drop the column `content_tr` on the `Vision` table. All the data in the column will be lost.
  - Added the required column `contents` to the `Mision` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contents` to the `Vision` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Mision" DROP COLUMN "content_en",
DROP COLUMN "content_tr",
ADD COLUMN     "contents" JSONB NOT NULL;

-- AlterTable
ALTER TABLE "public"."Vision" DROP COLUMN "content_en",
DROP COLUMN "content_tr",
ADD COLUMN     "contents" JSONB NOT NULL;
