import { Request, Response } from 'express';
import { IAboutService } from '../../services/interfaces/IAboutService';

export function createPublicAboutController(aboutService: IAboutService) {
  return {
    getAll: async (_req: Request, res: Response) => {
      try {
        const abouts = await aboutService.getAllAbouts();
        res.json(abouts);
      } catch (error: any) {
        res.status(500).json({ message: error.message || 'Hakkımızda bilgileri alınamadı' });
      }
    },

    getById: async (req: Request, res: Response) => {
      const id = req.params.id;
      if (!id) return res.status(400).json({ message: 'ID parametresi eksik' });

      try {
        const about = await aboutService.getAboutById(id);
        if (!about) return res.status(404).json({ message: 'Hakkımızda bulunamadı' });
        res.json(about);
      } catch (error: any) {
        res.status(500).json({ message: error.message || 'Hata oluştu' });
      }
    },
  };
}
