import { ReviewInput } from '../validators/review.validator';
import { Review } from '@prisma/client';
export declare function createReview(data: ReviewInput): Promise<Review>;
export declare function getAllReviews(): Promise<Review[]>;
export declare function getReviewById(id: string): Promise<Review | null>;
export declare function deleteReview(id: string): Promise<void>;
export declare function updateApproval(id: string, approved: boolean): Promise<Review>;
export declare function markAsRead(id: string): Promise<Review>;
export declare function getApprovedReviews(productId?: string): Promise<Review[]>;
//# sourceMappingURL=review.repository.d.ts.map