import { Router } from 'express';
import { LogService } from '../services/log.service';
import { createLogController } from '../controllers/log.controller';

const router = Router();
const logService = new LogService();
const logController = createLogController(logService);

router.post('/', logController.create);
router.get('/stats/summary', logController.getSummaryStats);
router.get('/stats/top-pages', logController.getTopPages);
router.get('/stats/geo', logController.getGeoStats);
router.get('/stats/timeline', logController.getTimelineStats);

export default router;
