import { Router } from 'express';
import { ReviewService } from '../../services/review.service';
import { createPublicReviewController } from '../../controllers/public/public.review.controller';
import { reviewSchema } from '../../validators/review.validator';
import { validateBody } from '../../middlewares/validate.middleware';

const router = Router();
const reviewService = new ReviewService();
const reviewController = createPublicReviewController(reviewService);

// Frontend create
router.post('/', validateBody(reviewSchema), reviewController.create);

// Frontend public fetch
router.get('/', reviewController.getAll);

export default router;
