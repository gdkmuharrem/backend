"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const log_service_1 = require("../services/log.service");
const log_controller_1 = require("../controllers/log.controller");
const router = (0, express_1.Router)();
const logService = new log_service_1.LogService();
const logController = (0, log_controller_1.createLogController)(logService);
router.post('/', logController.create);
router.get('/stats/summary', logController.getSummaryStats);
router.get('/stats/top-pages', logController.getTopPages);
router.get('/stats/geo', logController.getGeoStats);
router.get('/stats/timeline', logController.getTimelineStats);
exports.default = router;
//# sourceMappingURL=log.route.js.map