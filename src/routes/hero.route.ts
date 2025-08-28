import { Router } from 'express';
import { HeroService } from '../services/hero.service';
import { createHeroController } from '../controllers/hero.controller';
import { validateBody } from '../middlewares/validate.middleware';
import { heroSchema } from '../validators/hero.validator';
import { adminAuthMiddleware } from '../middlewares/auth.middleware';
import { AuthService } from '../services/auth.service';

const router = Router();
const heroService = new HeroService();
const heroController = createHeroController(heroService);
const authService = new AuthService();

router.post('/', adminAuthMiddleware(authService), validateBody(heroSchema), heroController.create);
router.get('/', adminAuthMiddleware(authService), heroController.getAll);
router.get('/:id', adminAuthMiddleware(authService), heroController.getById);
router.patch('/:id', adminAuthMiddleware(authService), heroController.update);
router.delete('/:id', adminAuthMiddleware(authService), heroController.delete);

export default router;