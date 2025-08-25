import { Router } from 'express';
import { CategoryService } from '../services/category.service';
import { createCategoryController } from '../controllers/category.controller';
import { validateBody } from '../middlewares/validate.middleware';
import { categorySchema } from '../validators/category.validator';
import { adminAuthMiddleware } from '../middlewares/auth.middleware';
import { AuthService } from '../services/auth.service';

const router = Router();
const categoryService = new CategoryService();
const categoryController = createCategoryController(categoryService);
const authService = new AuthService();

router.post('/', adminAuthMiddleware(authService), validateBody(categorySchema), categoryController.create);
router.get('/', adminAuthMiddleware(authService), categoryController.getAll);
router.get('/:id', adminAuthMiddleware(authService), categoryController.getById);
router.patch('/:id', adminAuthMiddleware(authService), categoryController.update);
router.delete('/:id', adminAuthMiddleware(authService), categoryController.delete);

export default router;
