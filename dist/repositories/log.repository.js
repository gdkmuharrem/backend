"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLog = createLog;
exports.getSummaryStats = getSummaryStats;
exports.getTopPages = getTopPages;
exports.getGeoStats = getGeoStats;
exports.getTimelineStats = getTimelineStats;
const prismaClient_1 = require("../prismaClient");
async function createLog(data) {
    const normalizedData = {
        ...data,
        userId: data.userId ?? null,
        visitorId: data.visitorId ?? null,
        country: data.country ?? null,
        city: data.city ?? null,
        userAgent: data.userAgent ?? null,
        page: data.page ?? null,
        method: data.method ?? null,
        referer: data.referer ?? null,
        details: data.details ?? null,
    };
    return prismaClient_1.prisma.log.create({ data: normalizedData });
}
async function getSummaryStats() {
    const now = new Date();
    const startOfToday = new Date(now);
    startOfToday.setHours(0, 0, 0, 0);
    const startOfWeek = new Date(now);
    startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay());
    startOfWeek.setHours(0, 0, 0, 0);
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const [today, thisWeek, thisMonth, total] = await Promise.all([
        prismaClient_1.prisma.log.count({ where: { createdAt: { gte: startOfToday } } }),
        prismaClient_1.prisma.log.count({ where: { createdAt: { gte: startOfWeek } } }),
        prismaClient_1.prisma.log.count({ where: { createdAt: { gte: startOfMonth } } }),
        prismaClient_1.prisma.log.count(),
    ]);
    return { today, thisWeek, thisMonth, total };
}
async function getTopPages() {
    const result = await prismaClient_1.prisma.log.groupBy({
        by: ['page'],
        _count: { page: true },
        orderBy: { _count: { page: 'desc' } },
        take: 10,
    });
    return result.map(r => ({ page: r.page, count: r._count.page }));
}
async function getGeoStats() {
    const result = await prismaClient_1.prisma.log.groupBy({
        by: ['country'],
        _count: { country: true },
        orderBy: { _count: { country: 'desc' } },
        where: { country: { not: null } },
        take: 10,
    });
    return result.map(r => ({ country: r.country, count: r._count.country }));
}
async function getTimelineStats(startDate, endDate) {
    return prismaClient_1.prisma.$queryRawUnsafe(`
    SELECT 
      DATE("createdAt") AS date,
      COUNT(*) AS count
    FROM "Log"
    WHERE "createdAt" BETWEEN '${startDate.toISOString()}' AND '${endDate.toISOString()}'
    GROUP BY date
    ORDER BY date ASC
  `);
}
//# sourceMappingURL=log.repository.js.map