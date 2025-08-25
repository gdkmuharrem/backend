import { Review } from '@prisma/client';
import { ReviewInput } from '../../validators/review.validator';
export interface IReviewService {
    createReview(data: ReviewInput): Promise<Review>;
    getAllReviews(): Promise<Review[]>;
    getReviewById(id: string): Promise<Review | null>;
    deleteReview(id: string): Promise<void>;
    updateApproval(id: string, approved: boolean): Promise<Review>;
    markAsRead(id: string): Promise<Review>;
}
//# sourceMappingURL=IReviewService.d.ts.map