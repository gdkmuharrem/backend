import { ILogCreate } from '../services/interfaces/ILogService';
export declare function createLog(data: ILogCreate): Promise<{
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
export declare function getSummaryStats(): Promise<{
    today: number;
    thisWeek: number;
    thisMonth: number;
    total: number;
}>;
export declare function getTopPages(): Promise<{
    page: string | null;
    count: number;
}[]>;
export declare function getGeoStats(): Promise<{
    country: string | null;
    count: number;
}[]>;
export declare function getTimelineStats(startDate: Date, endDate: Date): Promise<{
    date: string;
    count: number;
}[]>;
//# sourceMappingURL=log.repository.d.ts.map