-- CreateTable
CREATE TABLE "public"."Mision" (
    "id" TEXT NOT NULL,
    "title_tr" TEXT NOT NULL,
    "title_en" TEXT NOT NULL,
    "content_tr" TEXT NOT NULL,
    "content_en" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Mision_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."MisionImage" (
    "id" TEXT NOT NULL,
    "misionId" TEXT NOT NULL,
    "originalName" TEXT NOT NULL,
    "storedName" TEXT NOT NULL,
    "filePath" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MisionImage_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."MisionImage" ADD CONSTRAINT "MisionImage_misionId_fkey" FOREIGN KEY ("misionId") REFERENCES "public"."Mision"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
