import { Request, Response } from 'express';
import { IAboutImageService } from '../../services/interfaces/IAboutImageService';

export function createPublicAboutImageController(aboutImageService: IAboutImageService) {
  return {
    getByAbout: async (req: Request, res: Response) => {
      const aboutId = req.params.aboutId;
      if (!aboutId) return res.status(400).json({ message: 'Hakkımızda ID parametresi eksik' });

      try {
        const images = await aboutImageService.getImagesByAbout(aboutId);
        res.json(images);
      } catch (error: any) {
        res.status(500).json({ message: error.message || 'Resimler alınamadı' });
      }
    },

    getById: async (req: Request, res: Response) => {
      const id = req.params.id;
      if (!id) return res.status(400).json({ message: 'Resim ID parametresi eksik' });

      try {
        const image = await aboutImageService.getImageById(id);
        if (!image) return res.status(404).json({ message: 'Resim bulunamadı' });
        res.json(image);
      } catch (error: any) {
        res.status(500).json({ message: error.message || 'Resim alınamadı' });
      }
    },
  };
}
