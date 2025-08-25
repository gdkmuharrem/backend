import { Router } from 'express';
import { ProductService } from '../../services/product.service';
import { createPublicProductController } from '../../controllers/public/public.product.controller';

const router = Router();
const productService = new ProductService();
const controller = createPublicProductController(productService);

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.get('/category/:categoryId', controller.getByCategory);
router.get('/search', controller.search);
router.get('/paginate', controller.paginate);

export default router;
