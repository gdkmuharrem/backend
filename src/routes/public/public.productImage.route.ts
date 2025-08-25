import { Router } from 'express';
import { ProductImageService } from '../../services/productImage.service';
import { createPublicProductImageController } from '../../controllers/public/public.productImage.controller';

const router = Router();
const productImageService = new ProductImageService();
const controller = createPublicProductImageController(productImageService);

router.get('/:productId', controller.getByProduct);

export default router;
