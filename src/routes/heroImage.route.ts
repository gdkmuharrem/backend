import { Router } from 'express';
import { HeroImageService } from '../services/heroImage.service';
import { createHeroImageController } from '../controllers/heroImage.controller';
import { uploadHeroImage } from '../middlewares/upload.middleware';
import { adminAuthMiddleware } from '../middlewares/auth.middleware';
import { AuthService } from '../services/auth.service';
import { validateParams } from '../middlewares/validate.middleware';
import { uploadParamsSchema, deleteParamsSchema } from '../validators/heroImage.validator';

const router = Router();
const heroImageService = new HeroImageService();
const heroImageController = createHeroImageController(heroImageService);
const authService = new AuthService();

router.post(
  '/:heroId',
  adminAuthMiddleware(authService),
  validateParams(uploadParamsSchema),
  uploadHeroImage.single('image'),
  heroImageController.upload
);

router.get(
  '/:heroId',
  adminAuthMiddleware(authService),
  validateParams(uploadParamsSchema),
  heroImageController.getByHero
);

router.delete(
  '/:id',
  adminAuthMiddleware(authService),
  validateParams(deleteParamsSchema),
  heroImageController.delete
);

export default router;