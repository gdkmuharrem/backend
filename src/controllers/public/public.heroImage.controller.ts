import { Request, Response } from 'express';
import { IHeroImageService } from '../../services/interfaces/IHeroImageService';

export function createPublicHeroImageController(heroImageService: IHeroImageService) {
  return {
    // Hero'ya ait resimleri getir (frontend için)
    getByHero: async (req: Request, res: Response) => {
      const heroId = req.params.heroId;
      if (!heroId) return res.status(400).json({ message: 'Hero ID parametresi eksik' });

      try {
        const images = await heroImageService.getImagesByHero(heroId);
        res.json(images);
      } catch (error: any) {
        res.status(500).json({ message: error.message || 'Resimler alınamadı' });
      }
    },

    // ID ile resim getir (frontend için)
    getById: async (req: Request, res: Response) => {
      const id = req.params.id;
      if (!id) return res.status(400).json({ message: 'Resim ID parametresi eksik' });

      try {
        const image = await heroImageService.getImageById(id);
        if (!image) return res.status(404).json({ message: 'Resim bulunamadı' });
        res.json(image);
      } catch (error: any) {
        res.status(500).json({ message: error.message || 'Resim alınamadı' });
      }
    },
  };
}