import { Request, Response } from 'express';
import { ReviewService } from '../../services/review.service';
import { ReviewInput } from '../../validators/review.validator';

export function createPublicReviewController(reviewService: ReviewService) {
  return {
    create: async (req: Request, res: Response) => {
      try {
        const review = await reviewService.createReview(req.body as ReviewInput);
        res.status(201).json(review);
      } catch (error: any) {
        res.status(500).json({ message: error.message || 'Yorum kaydedilemedi' });
      }
    },

    getAll: async (req: Request, res: Response) => {
      try {
        const { productId } = req.query;
        const reviews = await reviewService.getPublicReviews(productId as string | undefined);
        res.json(reviews);
      } catch (error: any) {
        res.status(500).json({ message: error.message || 'Yorumlar alınamadı' });
      }
    },
  };
}
