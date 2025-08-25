import { Router } from 'express';
import { CategoryService } from '../../services/category.service';
import { createPublicCategoryController } from '../../controllers/public/public.category.controller';

const router = Router();
const categoryService = new CategoryService();
const controller = createPublicCategoryController(categoryService);

router.get('/', controller.getAll);
router.get('/:id', controller.getById);

export default router;
