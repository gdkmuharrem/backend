import { Log } from '@prisma/client';

export interface ILogCreate {
  userId?: string | null | undefined;
  visitorId?: string | null | undefined;
  ip: string;
  country?: string | null | undefined;
  city?: string | null | undefined;
  userAgent?: string | null | undefined;
  action: string;
  page?: string | null | undefined;
  method?: string | null | undefined;
  referer?: string | null | undefined;
  status: string;
  details?: any;
}



export interface ILogService {
  createLog(data: ILogCreate): Promise<Log>;
  getSummaryStats(): Promise<{ today: number; thisWeek: number; thisMonth: number; total: number }>;
  getTopPages(): Promise<{ page: string | null; count: number }[]>;
  getGeoStats(): Promise<{ country: string | null; count: number }[]>;
  getTimelineStats(range: '7d' | '30d'): Promise<{ date: string; count: number }[]>;
}
