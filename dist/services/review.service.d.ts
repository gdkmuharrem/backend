import { Review } from '@prisma/client';
import { IReviewService } from './interfaces/IReviewService';
import { ReviewInput } from '../validators/review.validator';
export declare class ReviewService implements IReviewService {
    private notificationService;
    createReview(data: ReviewInput): Promise<Review>;
    getAllReviews(): Promise<Review[]>;
    getReviewById(id: string): Promise<Review | null>;
    deleteReview(id: string): Promise<void>;
    updateApproval(id: string, approved: boolean): Promise<Review>;
    markAsRead(id: string): Promise<Review>;
    getPublicReviews(productId?: string): Promise<Review[]>;
}
//# sourceMappingURL=review.service.d.ts.map