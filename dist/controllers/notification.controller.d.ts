import { Request, Response } from 'express';
import { INotificationService } from '../services/interfaces/INotificationService';
export declare function createNotificationController(notificationService: INotificationService): {
    create: (req: Request, res: Response) => Promise<void>;
    getAll: (req: Request, res: Response) => Promise<void>;
    markAsRead: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    countUnread: (_req: Request, res: Response) => Promise<void>;
    delete: (req: Request, res: Response) => Promise<void>;
};
//# sourceMappingURL=notification.controller.d.ts.map