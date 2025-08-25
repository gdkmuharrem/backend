import { prisma } from '../prismaClient';
import { ILogCreate } from '../services/interfaces/ILogService';

export async function createLog(data: ILogCreate) {
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

  return prisma.log.create({ data: normalizedData });
}



export async function getSummaryStats() {
  const now = new Date();
  const startOfToday = new Date(now);
  startOfToday.setHours(0, 0, 0, 0);

  const startOfWeek = new Date(now);
  startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay());
  startOfWeek.setHours(0, 0, 0, 0);

  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);

  const [today, thisWeek, thisMonth, total] = await Promise.all([
    prisma.log.count({ where: { createdAt: { gte: startOfToday } } }),
    prisma.log.count({ where: { createdAt: { gte: startOfWeek } } }),
    prisma.log.count({ where: { createdAt: { gte: startOfMonth } } }),
    prisma.log.count(),
  ]);

  return { today, thisWeek, thisMonth, total };
}

export async function getTopPages() {
  const result = await prisma.log.groupBy({
    by: ['page'],
    _count: { page: true },
    orderBy: { _count: { page: 'desc' } },
    take: 10,
  });
  return result.map(r => ({ page: r.page, count: r._count.page }));
}

export async function getGeoStats() {
  const result = await prisma.log.groupBy({
    by: ['country'],
    _count: { country: true },
    orderBy: { _count: { country: 'desc' } },
    where: { country: { not: null } },
    take: 10,
  });
  return result.map(r => ({ country: r.country, count: r._count.country }));
}

export async function getTimelineStats(startDate: Date, endDate: Date) {
  return prisma.$queryRawUnsafe<{ date: string; count: number }[]>(`
    SELECT 
      DATE("createdAt") AS date,
      COUNT(*) AS count
    FROM "Log"
    WHERE "createdAt" BETWEEN '${startDate.toISOString()}' AND '${endDate.toISOString()}'
    GROUP BY date
    ORDER BY date ASC
  `);
}
