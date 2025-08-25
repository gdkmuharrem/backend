import { Router } from 'express';
import { VisionService } from '../../services/vision.service';
import { createPublicVisionController } from '../../controllers/public/public.vision.controller';

const router = Router();
const visionService = new VisionService();
const controller = createPublicVisionController(visionService);

router.get('/', controller.getAll);
router.get('/:id', controller.getById);

export default router;
