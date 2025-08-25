import { Request, Response } from 'express';
import { IVisionImageService } from '../../services/interfaces/IVisionImageService';

export function createPublicVisionImageController(visionImageService: IVisionImageService) {
  return {
    getByVision: async (req: Request, res: Response) => {
      const visionId = req.params.visionId;
      if (!visionId) return res.status(400).json({ message: 'Hakkımızda ID parametresi eksik' });

      try {
        const images = await visionImageService.getImagesByVision(visionId);
        res.json(images);
      } catch (error: any) {
        res.status(500).json({ message: error.message || 'Resimler alınamadı' });
      }
    },

    getById: async (req: Request, res: Response) => {
      const id = req.params.id;
      if (!id) return res.status(400).json({ message: 'Resim ID parametresi eksik' });

      try {
        const image = await visionImageService.getImageById(id);
        if (!image) return res.status(404).json({ message: 'Resim bulunamadı' });
        res.json(image);
      } catch (error: any) {
        res.status(500).json({ message: error.message || 'Resim alınamadı' });
      }
    },
  };
}
