import { Router } from 'express';
import { ProductImageService } from '../services/productImage.service';
import { createProductImageController } from '../controllers/productImage.controller';
import { uploadProductImage } from '../middlewares/upload.middleware';
import { adminAuthMiddleware } from '../middlewares/auth.middleware';
import { AuthService } from '../services/auth.service';
import { validateParams } from '../middlewares/validate.middleware';
import { uploadParamsSchema, deleteParamsSchema } from '../validators/productImage.validator';

const router = Router();
const productImageService = new ProductImageService();
const productImageController = createProductImageController(productImageService);
const authService = new AuthService();

router.post(
  '/:productId',
  adminAuthMiddleware(authService),
  validateParams(uploadParamsSchema),     // Burada params doğrulaması
  uploadProductImage.single('image'),
  productImageController.upload
);

router.get(
  '/:productId',
  adminAuthMiddleware(authService),
  validateParams(uploadParamsSchema),     // Burada params doğrulaması
  productImageController.getByProduct
);

router.delete(
  '/:id',
  adminAuthMiddleware(authService),
  validateParams(deleteParamsSchema),     // Burada params doğrulaması
  productImageController.delete
);

export default router;
