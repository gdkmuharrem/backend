import { Router } from 'express';
import { MisionService } from '../../services/mision.service';
import { createPublicMisionController } from '../../controllers/public/public.mision.controller';

const router = Router();
const misionService = new MisionService();
const controller = createPublicMisionController(misionService);

router.get('/', controller.getAll);
router.get('/:id', controller.getById);

export default router;
