import { Router } from 'express';
import { AboutImageService } from '../../services/aboutImage.service';
import { createPublicAboutImageController } from '../../controllers/public/public.aboutImage.controller';

const router = Router();
const aboutImageService = new AboutImageService();
const controller = createPublicAboutImageController(aboutImageService);

// Public erişim: sadece GET işlemleri
router.get('/about/:aboutId', controller.getByAbout);
router.get('/:id', controller.getById);

export default router;
