import { Request, Response } from 'express';
import { IVisionService } from '../../services/interfaces/IVisionService';

export function createPublicVisionController(visionService: IVisionService) {
  return {
    getAll: async (_req: Request, res: Response) => {
      try {
        const visions = await visionService.getAllVisions();
        res.json(visions);
      } catch (error: any) {
        res.status(500).json({ message: error.message || 'Hakkımızda bilgileri alınamadı' });
      }
    },

    getById: async (req: Request, res: Response) => {
      const id = req.params.id;
      if (!id) return res.status(400).json({ message: 'ID parametresi eksik' });

      try {
        const vision = await visionService.getVisionById(id);
        if (!vision) return res.status(404).json({ message: 'Hakkımızda bulunamadı' });
        res.json(vision);
      } catch (error: any) {
        res.status(500).json({ message: error.message || 'Hata oluştu' });
      }
    },
  };
}
