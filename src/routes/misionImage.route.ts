import { Router } from 'express';
import { MisionImageService } from '../services/misionImage.service';
import { createMisionImageController } from '../controllers/misionImage.controller';
import { uploadMisionImage } from '../middlewares/upload.middleware'; // aynısını kullanabilirsin
import { adminAuthMiddleware } from '../middlewares/auth.middleware';
import { AuthService } from '../services/auth.service';
import { validateParams } from '../middlewares/validate.middleware';
import { uploadParamsSchema, deleteParamsSchema } from '../validators/misionImage.validator';

const router = Router();
const misionImageService = new MisionImageService();
const misionImageController = createMisionImageController(misionImageService);
const authService = new AuthService();

router.post(
  '/:misionId',
  adminAuthMiddleware(authService),
  validateParams(uploadParamsSchema),
  uploadMisionImage.single('image'),
  misionImageController.upload
);

router.get(
  '/:misionId',
  adminAuthMiddleware(authService),
  validateParams(uploadParamsSchema),
  misionImageController.getByMision
);

router.delete(
  '/:id',
  adminAuthMiddleware(authService),
  validateParams(deleteParamsSchema),
  misionImageController.delete
);

export default router;
