import { Router } from 'express';
import { ReviewService } from '../services/review.service';
import { createReviewController } from '../controllers/review.controller';
import { reviewSchema, approvalSchema } from '../validators/review.validator';
import { validateBody } from '../middlewares/validate.middleware';
import { adminAuthMiddleware } from '../middlewares/auth.middleware';
import { AuthService } from '../services/auth.service';

const router = Router();
const reviewService = new ReviewService();
const reviewController = createReviewController(reviewService);
const authService = new AuthService();

router.post('/', validateBody(reviewSchema), reviewController.create);

// Admin-only routes:
router.get('/', adminAuthMiddleware(authService), reviewController.getAll);
router.get('/:id', adminAuthMiddleware(authService), reviewController.getById);
router.delete('/:id', adminAuthMiddleware(authService), reviewController.delete);
router.patch(
  '/:id',
  adminAuthMiddleware(authService),
  validateBody(approvalSchema),
  reviewController.approveToggle
);
// Yeni: okunma durumu için PATCH /:id/read
router.patch('/:id/read', adminAuthMiddleware(authService), reviewController.markAsRead);

export default router;
