import { Router } from 'express';
import { AboutImageService } from '../services/aboutImage.service';
import { createAboutImageController } from '../controllers/aboutImage.controller';
import { uploadAboutImage } from '../middlewares/upload.middleware'; // aynısını kullanabilirsin
import { adminAuthMiddleware } from '../middlewares/auth.middleware';
import { AuthService } from '../services/auth.service';
import { validateParams } from '../middlewares/validate.middleware';
import { uploadParamsSchema, deleteParamsSchema } from '../validators/aboutImage.validator';

const router = Router();
const aboutImageService = new AboutImageService();
const aboutImageController = createAboutImageController(aboutImageService);
const authService = new AuthService();

router.post(
  '/:aboutId',
  adminAuthMiddleware(authService),
  validateParams(uploadParamsSchema),
  uploadAboutImage.single('image'),
  aboutImageController.upload
);

router.get(
  '/:aboutId',
  adminAuthMiddleware(authService),
  validateParams(uploadParamsSchema),
  aboutImageController.getByAbout
);

router.delete(
  '/:id',
  adminAuthMiddleware(authService),
  validateParams(deleteParamsSchema),
  aboutImageController.delete
);

export default router;
