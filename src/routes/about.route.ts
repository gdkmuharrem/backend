import { Router } from 'express';
import { AboutService } from '../services/about.service';
import { createAboutController } from '../controllers/about.controller';
import { validateBody } from '../middlewares/validate.middleware';
import { aboutSchema } from '../validators/about.validator';
import { adminAuthMiddleware } from '../middlewares/auth.middleware';
import { AuthService } from '../services/auth.service';

const router = Router();
const aboutService = new AboutService();
const aboutController = createAboutController(aboutService);
const authService = new AuthService();

router.post('/', adminAuthMiddleware(authService), validateBody(aboutSchema), aboutController.create);
router.get('/', adminAuthMiddleware(authService), aboutController.getAll);
router.get('/:id', adminAuthMiddleware(authService), aboutController.getById);
router.patch('/:id', adminAuthMiddleware(authService), aboutController.update);
router.delete('/:id', adminAuthMiddleware(authService), aboutController.delete);

export default router;
