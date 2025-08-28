import { Router } from 'express';
import { HeroImageService } from '../../services/heroImage.service';
import { createPublicHeroImageController } from '../../controllers/public/public.heroImage.controller';

const router = Router();
const heroImageService = new HeroImageService();
const heroImageController = createPublicHeroImageController(heroImageService);

// Public routes - authentication gerekmez
router.get('/:heroId', heroImageController.getByHero);
router.get('/image/:id', heroImageController.getById);

export default router;