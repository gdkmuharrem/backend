import { Request, Response } from 'express';
import { IAboutService } from '../services/interfaces/IAboutService';

export function createAboutController(aboutService: IAboutService) {
  return {
    create: async (req: Request, res: Response) => {
      try {
        const about = await aboutService.createAbout(req.body);
        res.status(201).json(about);
      } catch (error: any) {
        res.status(500).json({ message: error.message || 'Hakkımızda oluşturulamadı' });
      }
    },

    getAll: async (_req: Request, res: Response) => {
      try {
        const abouts = await aboutService.getAllAbouts();
        res.json(abouts);
      } catch (error: any) {
        res.status(500).json({ message: error.message || 'Hakkımızda bilgileri alınamadı' });
      }
    },

    getById: async (req: Request, res: Response) => {
      try {
        const about = await aboutService.getAboutById(req.params.id!);
        if (!about) return res.status(404).json({ message: 'Hakkımızda bulunamadı' });
        res.json(about);
      } catch (error: any) {
        res.status(500).json({ message: error.message || 'Hata oluştu' });
      }
    },

    update: async (req: Request, res: Response) => {
      try {
        const updated = await aboutService.updateAbout(req.params.id!, req.body);
        res.json(updated);
      } catch (error: any) {
        res.status(500).json({ message: error.message || 'Güncelleme başarısız' });
      }
    },

    delete: async (req: Request, res: Response) => {
      try {
        await aboutService.deleteAbout(req.params.id!);
        res.status(204).send();
      } catch (error: any) {
        res.status(500).json({ message: error.message || 'Silme işlemi başarısız' });
      }
    },
  };
}
