import { ILogCreate, ILogService } from './interfaces/ILogService';
export declare class LogService implements ILogService {
    createLog(data: ILogCreate): Promise<{
        id: string;
        createdAt: Date;
        page: string | null;
        userId: string | null;
        visitorId: string | null;
        ip: string;
        country: string | null;
        city: string | null;
        userAgent: string | null;
        action: string;
        method: string | null;
        referer: string | null;
        status: string;
        details: import("@prisma/client/runtime/library").JsonValue | null;
    }>;
    getSummaryStats(): Promise<{
        today: number;
        thisWeek: number;
        thisMonth: number;
        total: number;
    }>;
    getTopPages(): Promise<{
        page: string | null;
        count: number;
    }[]>;
    getGeoStats(): Promise<{
        country: string | null;
        count: number;
    }[]>;
    getTimelineStats(range: '7d' | '30d'): Promise<{
        date: string;
        count: number;
    }[]>;
}
//# sourceMappingURL=log.service.d.ts.map