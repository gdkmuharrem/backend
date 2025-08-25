import { Router } from 'express';
import { VisionImageService } from '../services/visionImage.service';
import { createVisionImageController } from '../controllers/visionImage.controller';
import { uploadVisionImage } from '../middlewares/upload.middleware'; // aynısını kullanabilirsin
import { adminAuthMiddleware } from '../middlewares/auth.middleware';
import { AuthService } from '../services/auth.service';
import { validateParams } from '../middlewares/validate.middleware';
import { uploadParamsSchema, deleteParamsSchema } from '../validators/visionImage.validator';

const router = Router();
const visionImageService = new VisionImageService();
const visionImageController = createVisionImageController(visionImageService);
const authService = new AuthService();

router.post(
  '/:visionId',
  adminAuthMiddleware(authService),
  validateParams(uploadParamsSchema),
  uploadVisionImage.single('image'),
  visionImageController.upload
);

router.get(
  '/:visionId',
  adminAuthMiddleware(authService),
  validateParams(uploadParamsSchema),
  visionImageController.getByVision
);

router.delete(
  '/:id',
  adminAuthMiddleware(authService),
  validateParams(deleteParamsSchema),
  visionImageController.delete
);

export default router;
