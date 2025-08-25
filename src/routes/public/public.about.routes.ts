import { Router } from 'express';
import { AboutService } from '../../services/about.service';
import { createPublicAboutController } from '../../controllers/public/public.about.controller';

const router = Router();
const aboutService = new AboutService();
const controller = createPublicAboutController(aboutService);

router.get('/', controller.getAll);
router.get('/:id', controller.getById);

export default router;
