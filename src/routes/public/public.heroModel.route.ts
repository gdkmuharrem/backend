import { Router } from 'express';
import { HeroModelService } from '../../services/heroModel.service';
import { createPublicHeroModelController } from '../../controllers/public/public.heroModel.controller';

const router = Router();
const heroModelService = new HeroModelService();
const heroModelController = createPublicHeroModelController(heroModelService);

// Public routes - authentication gerekmez
router.get('/:heroId', heroModelController.getByHero);
router.get('/model/:id', heroModelController.getById);

export default router;