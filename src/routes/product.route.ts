import { Router } from 'express';
import { ProductService } from '../services/product.service';
import { createProductController } from '../controllers/product.controller';
import { validateBody } from '../middlewares/validate.middleware';
import { productSchema } from '../validators/product.validator';
import { adminAuthMiddleware } from '../middlewares/auth.middleware';
import { AuthService } from '../services/auth.service';

const router = Router();
const productService = new ProductService();
const productController = createProductController(productService);
const authService = new AuthService();

router.post('/', adminAuthMiddleware(authService), validateBody(productSchema), productController.create);
router.get('/', adminAuthMiddleware(authService), productController.getAll);
router.get('/category/:categoryId', adminAuthMiddleware(authService), productController.getByCategory);
router.get('/search', adminAuthMiddleware(authService), productController.search);
router.get('/paginate', adminAuthMiddleware(authService), productController.paginate);
router.get('/:id', adminAuthMiddleware(authService), productController.getById);
router.patch('/:id', adminAuthMiddleware(authService), productController.update);
router.delete('/:id', adminAuthMiddleware(authService), productController.delete);
router.post('/bulk-delete', adminAuthMiddleware(authService), productController.bulkDelete);

export default router;
