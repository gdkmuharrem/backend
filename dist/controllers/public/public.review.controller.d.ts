import { Request, Response } from 'express';
import { ReviewService } from '../../services/review.service';
export declare function createPublicReviewController(reviewService: ReviewService): {
    create: (req: Request, res: Response) => Promise<void>;
    getAll: (req: Request, res: Response) => Promise<void>;
};
//# sourceMappingURL=public.review.controller.d.ts.map