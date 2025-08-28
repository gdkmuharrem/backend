import { Router } from 'express';
import { HeroService } from '../../services/hero.service';
import { createPublicHeroController } from '../../controllers/public/public.hero.controller';

const router = Router();
const heroService = new HeroService();
const heroController = createPublicHeroController(heroService);

// Public routes - authentication gerekmez
router.get('/', heroController.getAll);
router.get('/active', heroController.getActive);
router.get('/:id', heroController.getById);

export default router;