import { Router } from 'express';
import { VisionImageService } from '../../services/visionImage.service';
import { createPublicVisionImageController } from '../../controllers/public/public.visionImage.controller';

const router = Router();
const visionImageService = new VisionImageService();
const controller = createPublicVisionImageController(visionImageService);

// Public erişim: sadece GET işlemleri
router.get('/vision/:visionId', controller.getByVision);
router.get('/:id', controller.getById);

export default router;
