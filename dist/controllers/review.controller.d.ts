import { Request, Response } from 'express';
import { IReviewService } from '../services/interfaces/IReviewService';
export declare function createReviewController(reviewService: IReviewService): {
    create: (req: Request, res: Response) => Promise<void>;
    getAll: (_req: Request, res: Response) => Promise<void>;
    getById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    delete: (req: Request, res: Response) => Promise<void>;
    approveToggle: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    markAsRead: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
};
//# sourceMappingURL=review.controller.d.ts.map