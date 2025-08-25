import { Router } from 'express';
import { MisionImageService } from '../../services/misionImage.service';
import { createPublicMisionImageController } from '../../controllers/public/public.misionImage.controller';

const router = Router();
const misionImageService = new MisionImageService();
const controller = createPublicMisionImageController(misionImageService);

// Public erişim: sadece GET işlemleri
router.get('/mision/:misionId', controller.getByMision);
router.get('/:id', controller.getById);

export default router;
