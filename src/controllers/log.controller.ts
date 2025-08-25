import { Request, Response } from 'express';
import { ILogService } from '../services/interfaces/ILogService';
import { createLogSchema } from '../validators/log.validator';

export function createLogController(logService: ILogService) {
  return {
    create: async (req: Request, res: Response) => {
      try {
        let data = createLogSchema.parse(req.body);

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
      } catch (error: any) {
        res.status(400).json({ message: error.message || 'Log kaydedilemedi' });
      }
    }
    ,

    getSummaryStats: async (_req: Request, res: Response) => {
      try {
        const data = await logService.getSummaryStats();
        res.json(data);
      } catch (error: any) {
        res.status(500).json({ message: error.message || 'İstatistik alınamadı' });
      }
    },

    getTopPages: async (_req: Request, res: Response) => {
      try {
        const data = await logService.getTopPages();
        res.json(data);
      } catch (error: any) {
        res.status(500).json({ message: error.message || 'İstatistik alınamadı' });
      }
    },

    getGeoStats: async (_req: Request, res: Response) => {
      try {
        const data = await logService.getGeoStats();
        res.json(data);
      } catch (error: any) {
        res.status(500).json({ message: error.message || 'İstatistik alınamadı' });
      }
    },

    getTimelineStats: async (req: Request, res: Response) => {
      try {
        const range = req.query.range === '30d' ? '30d' : '7d';
        const data = await logService.getTimelineStats(range);
        res.json(data);
      } catch (error: any) {
        res.status(500).json({ message: error.message || 'İstatistik alınamadı' });
      }
    },
  };
}
