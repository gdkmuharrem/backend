import { Request, Response } from 'express';
import { ILogService } from '../services/interfaces/ILogService';
export declare function createLogController(logService: ILogService): {
    create: (req: Request, res: Response) => Promise<void>;
    getSummaryStats: (_req: Request, res: Response) => Promise<void>;
    getTopPages: (_req: Request, res: Response) => Promise<void>;
    getGeoStats: (_req: Request, res: Response) => Promise<void>;
    getTimelineStats: (req: Request, res: Response) => Promise<void>;
};
//# sourceMappingURL=log.controller.d.ts.map