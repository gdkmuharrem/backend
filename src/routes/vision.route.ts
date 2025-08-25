import { Router } from 'express';
import { VisionService } from '../services/vision.service';
import { createVisionController } from '../controllers/vision.controller';
import { validateBody } from '../middlewares/validate.middleware';
import { visionSchema } from '../validators/vision.validator';
import { adminAuthMiddleware } from '../middlewares/auth.middleware';
import { AuthService } from '../services/auth.service';

const router = Router();
const visionService = new VisionService();
const visionController = createVisionController(visionService);
const authService = new AuthService();

router.post('/', adminAuthMiddleware(authService), validateBody(visionSchema), visionController.create);
router.get('/', adminAuthMiddleware(authService), visionController.getAll);
router.get('/:id', adminAuthMiddleware(authService), visionController.getById);
router.patch('/:id', adminAuthMiddleware(authService), visionController.update);
router.delete('/:id', adminAuthMiddleware(authService), visionController.delete);

export default router;
