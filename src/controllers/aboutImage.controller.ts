import { Request, Response } from 'express';
import { IAboutImageService } from '../services/interfaces/IAboutImageService';
import fs from 'fs';

export function createAboutImageController(aboutImageService: IAboutImageService) {
  return {
    upload: async (req: Request, res: Response) => {
      const aboutId = req.params.aboutId;
      if (!aboutId) return res.status(400).json({ message: 'Hakkımızda ID parametresi eksik' });

      if (!req.file) return res.status(400).json({ message: 'Dosya yüklenmedi' });

      try {
        const uploadedImage = await aboutImageService.uploadAboutImage(aboutId, req.file);
        res.status(201).json(uploadedImage);
      } catch (error: any) {
        res.status(500).json({ message: error.message || 'Resim yükleme başarısız' });
      }
    },

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

    delete: async (req: Request, res: Response) => {
      const id = req.params.id;
      if (!id) return res.status(400).json({ message: 'Resim ID parametresi eksik' });

      try {
        const image = await aboutImageService.getImageById(id);
        if (!image) return res.status(404).json({ message: 'Resim bulunamadı' });

        fs.unlink(image.filePath, (err) => {
          if (err) console.error('Dosya silme hatası:', err);
        });

        await aboutImageService.deleteImage(id);
        res.status(204).send();
      } catch (error: any) {
        res.status(500).json({ message: error.message || 'Resim silme başarısız' });
      }
    },
  };
}
