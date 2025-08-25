import { Request, Response } from 'express';
import { IMisionService } from '../services/interfaces/IMisionService';

export function createMisionController(misionService: IMisionService) {
  return {
    create: async (req: Request, res: Response) => {
      try {
        const mision = await misionService.createMision(req.body);
        res.status(201).json(mision);
      } catch (error: any) {
        res.status(500).json({ message: error.message || 'Hakkımızda oluşturulamadı' });
      }
    },

    getAll: async (_req: Request, res: Response) => {
      try {
        const misions = await misionService.getAllMisions();
        res.json(misions);
      } catch (error: any) {
        res.status(500).json({ message: error.message || 'Hakkımızda bilgileri alınamadı' });
      }
    },

    getById: async (req: Request, res: Response) => {
      try {
        const mision = await misionService.getMisionById(req.params.id!);
        if (!mision) return res.status(404).json({ message: 'Hakkımızda bulunamadı' });
        res.json(mision);
      } catch (error: any) {
        res.status(500).json({ message: error.message || 'Hata oluştu' });
      }
    },

    update: async (req: Request, res: Response) => {
      try {
        const updated = await misionService.updateMision(req.params.id!, req.body);
        res.json(updated);
      } catch (error: any) {
        res.status(500).json({ message: error.message || 'Güncelleme başarısız' });
      }
    },

    delete: async (req: Request, res: Response) => {
      try {
        await misionService.deleteMision(req.params.id!);
        res.status(204).send();
      } catch (error: any) {
        res.status(500).json({ message: error.message || 'Silme işlemi başarısız' });
      }
    },
  };
}
