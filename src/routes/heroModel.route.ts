import { Router } from 'express';
import { HeroModelService } from '../services/heroModel.service';
import { createHeroModelController } from '../controllers/heroModel.controller';
import { uploadHeroModelSafe } from '../middlewares/upload.middleware';
import { adminAuthMiddleware } from '../middlewares/auth.middleware';
import { AuthService } from '../services/auth.service';
import { validateParams } from '../middlewares/validate.middleware';
import { uploadParamsSchema, deleteParamsSchema } from '../validators/heroModel.validator';

const router = Router();
const heroModelService = new HeroModelService();
const heroModelController = createHeroModelController(heroModelService);
const authService = new AuthService();

router.post(
  '/:heroId',
  adminAuthMiddleware(authService),
  validateParams(uploadParamsSchema),
  uploadHeroModelSafe.single('model'), // 3D model için güvenli versiyon
  heroModelController.upload
);

router.get(
  '/:heroId',
  adminAuthMiddleware(authService),
  validateParams(uploadParamsSchema),
  heroModelController.getByHero
);

router.delete(
  '/:id',
  adminAuthMiddleware(authService),
  validateParams(deleteParamsSchema),
  heroModelController.delete
);

export default router;