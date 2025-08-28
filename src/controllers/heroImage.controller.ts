import { Request, Response } from 'express';
import { IHeroImageService } from '../services/interfaces/IHeroImageService';
import fs from 'fs';

export function createHeroImageController(heroImageService: IHeroImageService) {
  return {
    upload: async (req: Request, res: Response) => {
      const heroId = req.params.heroId;
      if (!heroId) return res.status(400).json({ message: 'Hero ID parametresi eksik' });

      if (!req.file) return res.status(400).json({ message: 'Dosya yüklenmedi' });

      try {
        const uploadedImage = await heroImageService.uploadHeroImage(heroId, req.file);
        res.status(201).json(uploadedImage);
      } catch (error: any) {
        res.status(500).json({ message: error.message || 'Resim yükleme başarısız' });
      }
    },

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

    delete: async (req: Request, res: Response) => {
      const id = req.params.id;
      if (!id) return res.status(400).json({ message: 'Resim ID parametresi eksik' });

      try {
        const image = await heroImageService.getImageById(id);
        if (!image) return res.status(404).json({ message: 'Resim bulunamadı' });

        fs.unlink(image.filePath, (err) => {
          if (err) console.error('Dosya silme hatası:', err);
        });

        await heroImageService.deleteImage(id);
        res.status(204).send();
      } catch (error: any) {
        res.status(500).json({ message: error.message || 'Resim silme başarısız' });
      }
    },
  };
}