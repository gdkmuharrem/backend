/*
  Warnings:

  - You are about to drop the `HeroModel` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."HeroImage" DROP CONSTRAINT "HeroImage_heroId_fkey";

-- DropForeignKey
ALTER TABLE "public"."HeroModel" DROP CONSTRAINT "HeroModel_heroId_fkey";

-- DropTable
DROP TABLE "public"."HeroModel";

-- CreateTable
CREATE TABLE "public"."Hero3DModel" (
    "id" TEXT NOT NULL,
    "heroId" TEXT NOT NULL,
    "originalName" TEXT NOT NULL,
    "storedName" TEXT NOT NULL,
    "filePath" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Hero3DModel_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."HeroImage" ADD CONSTRAINT "HeroImage_heroId_fkey" FOREIGN KEY ("heroId") REFERENCES "public"."Hero"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Hero3DModel" ADD CONSTRAINT "Hero3DModel_heroId_fkey" FOREIGN KEY ("heroId") REFERENCES "public"."Hero"("id") ON DELETE CASCADE ON UPDATE CASCADE;
