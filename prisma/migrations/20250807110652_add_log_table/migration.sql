-- CreateTable
CREATE TABLE "public"."Log" (
    "id" TEXT NOT NULL,
    "userId" TEXT,
    "visitorId" TEXT,
    "ip" TEXT NOT NULL,
    "country" TEXT,
    "city" TEXT,
    "userAgent" TEXT,
    "action" TEXT NOT NULL,
    "page" TEXT,
    "method" TEXT,
    "referer" TEXT,
    "status" TEXT NOT NULL,
    "details" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Log_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Log" ADD CONSTRAINT "Log_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."Admin"("id") ON DELETE SET NULL ON UPDATE CASCADE;
