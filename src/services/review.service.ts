import { Review } from '@prisma/client';
import * as reviewRepo from '../repositories/review.repository';
import { IReviewService } from './interfaces/IReviewService';
import { ReviewInput } from '../validators/review.validator';
import { NotificationService } from './notification.service';

export class ReviewService implements IReviewService {
  private notificationService = new NotificationService();

  async createReview(data: ReviewInput): Promise<Review> {
    const review = await reviewRepo.createReview(data);

    const now = new Date().toLocaleString('tr-TR');
    const shortContent = data.content.length > 100 ? data.content.slice(0, 100) + '...' : data.content;
    const title = `${data.name} (${data.email})`;
    const body = `Tarih: ${now}\nYorum: ${shortContent}`;

    await this.notificationService.createNotification({
      type: 'review',
      title,
      body,
      relatedId: review.id,
    });

    return review;
  }

  getAllReviews(): Promise<Review[]> {
    return reviewRepo.getAllReviews();
  }

  getReviewById(id: string): Promise<Review | null> {
    return reviewRepo.getReviewById(id);
  }

  async deleteReview(id: string): Promise<void> {
    await reviewRepo.deleteReview(id);
    await this.notificationService.deleteNotificationByRelatedId(id);
  }

  async updateApproval(id: string, approved: boolean): Promise<Review> {
    const review = await reviewRepo.updateApproval(id, approved);

    if (approved) {
      await this.notificationService.markAsReadByRelatedId(id);
    }

    return review;
  }

  async markAsRead(id: string): Promise<Review> {
    const review = await reviewRepo.markAsRead(id);
    if (review) {
      await this.notificationService.markAsReadByRelatedId(id);
    }
    return review;
  }

  getPublicReviews(productId?: string): Promise<Review[]> {
    return reviewRepo.getApprovedReviews(productId);
  }

}
