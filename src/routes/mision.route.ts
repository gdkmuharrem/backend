import { Router } from 'express';
import { MisionService } from '../services/mision.service';
import { createMisionController } from '../controllers/mision.controller';
import { validateBody } from '../middlewares/validate.middleware';
import { misionSchema } from '../validators/mision.validator';
import { adminAuthMiddleware } from '../middlewares/auth.middleware';
import { AuthService } from '../services/auth.service';

const router = Router();
const misionService = new MisionService();
const misionController = createMisionController(misionService);
const authService = new AuthService();

router.post('/', adminAuthMiddleware(authService), validateBody(misionSchema), misionController.create);
router.get('/', adminAuthMiddleware(authService), misionController.getAll);
router.get('/:id', adminAuthMiddleware(authService), misionController.getById);
router.patch('/:id', adminAuthMiddleware(authService), misionController.update);
router.delete('/:id', adminAuthMiddleware(authService), misionController.delete);

export default router;
