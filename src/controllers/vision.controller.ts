import { Request, Response } from 'express';
import { IVisionService } from '../services/interfaces/IVisionService';

export function createVisionController(visionService: IVisionService) {
  return {
    create: async (req: Request, res: Response) => {
      try {
        const vision = await visionService.createVision(req.body);
        res.status(201).json(vision);
      } catch (error: any) {
        res.status(500).json({ message: error.message || 'Hakkımızda oluşturulamadı' });
      }
    },

    getAll: async (_req: Request, res: Response) => {
      try {
        const visions = await visionService.getAllVisions();
        res.json(visions);
      } catch (error: any) {
        res.status(500).json({ message: error.message || 'Hakkımızda bilgileri alınamadı' });
      }
    },

    getById: async (req: Request, res: Response) => {
      try {
        const vision = await visionService.getVisionById(req.params.id!);
        if (!vision) return res.status(404).json({ message: 'Hakkımızda bulunamadı' });
        res.json(vision);
      } catch (error: any) {
        res.status(500).json({ message: error.message || 'Hata oluştu' });
      }
    },

    update: async (req: Request, res: Response) => {
      try {
        const updated = await visionService.updateVision(req.params.id!, req.body);
        res.json(updated);
      } catch (error: any) {
        res.status(500).json({ message: error.message || 'Güncelleme başarısız' });
      }
    },

    delete: async (req: Request, res: Response) => {
      try {
        await visionService.deleteVision(req.params.id!);
        res.status(204).send();
      } catch (error: any) {
        res.status(500).json({ message: error.message || 'Silme işlemi başarısız' });
      }
    },
  };
}
