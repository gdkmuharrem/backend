"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLogController = createLogController;
const log_validator_1 = require("../validators/log.validator");
function createLogController(logService) {
    return {
        create: async (req, res) => {
            try {
                let data = log_validator_1.createLogSchema.parse(req.body);
                // Opsiyonel alanlarda undefined ise null yap
                data = {
                    ...data,
                    userId: data.userId ?? null,
                    visitorId: data.visitorId ?? null,
                    country: data.country ?? null,
                    city: data.city ?? null,
                    userAgent: data.userAgent ?? null,
                    page: data.page ?? null,
                    method: data.method ?? null,
                    referer: data.referer ?? null,
                    details: data.details ?? null,
                };
                const log = await logService.createLog(data);
                res.status(201).json(log);
            }
            catch (error) {
                res.status(400).json({ message: error.message || 'Log kaydedilemedi' });
            }
        },
        getSummaryStats: async (_req, res) => {
            try {
                const data = await logService.getSummaryStats();
                res.json(data);
            }
            catch (error) {
                res.status(500).json({ message: error.message || 'İstatistik alınamadı' });
            }
        },
        getTopPages: async (_req, res) => {
            try {
                const data = await logService.getTopPages();
                res.json(data);
            }
            catch (error) {
                res.status(500).json({ message: error.message || 'İstatistik alınamadı' });
            }
        },
        getGeoStats: async (_req, res) => {
            try {
                const data = await logService.getGeoStats();
                res.json(data);
            }
            catch (error) {
                res.status(500).json({ message: error.message || 'İstatistik alınamadı' });
            }
        },
        getTimelineStats: async (req, res) => {
            try {
                const range = req.query.range === '30d' ? '30d' : '7d';
                const data = await logService.getTimelineStats(range);
                res.json(data);
            }
            catch (error) {
                res.status(500).json({ message: error.message || 'İstatistik alınamadı' });
            }
        },
    };
}
//# sourceMappingURL=log.controller.js.map