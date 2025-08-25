import { Request, Response } from 'express';
import { IMisionImageService } from '../services/interfaces/IMisionImageService';
import fs from 'fs';

export function createMisionImageController(misionImageService: IMisionImageService) {
  return {
    upload: async (req: Request, res: Response) => {
      const misionId = req.params.misionId;
      if (!misionId) return res.status(400).json({ message: 'Hakkımızda ID parametresi eksik' });

      if (!req.file) return res.status(400).json({ message: 'Dosya yüklenmedi' });

      try {
        const uploadedImage = await misionImageService.uploadMisionImage(misionId, req.file);
        res.status(201).json(uploadedImage);
      } catch (error: any) {
        res.status(500).json({ message: error.message || 'Resim yükleme başarısız' });
      }
    },

    getByMision: async (req: Request, res: Response) => {
      const misionId = req.params.misionId;
      if (!misionId) return res.status(400).json({ message: 'Hakkımızda ID parametresi eksik' });

      try {
        const images = await misionImageService.getImagesByMision(misionId);
        res.json(images);
      } catch (error: any) {
        res.status(500).json({ message: error.message || 'Resimler alınamadı' });
      }
    },

    delete: async (req: Request, res: Response) => {
      const id = req.params.id;
      if (!id) return res.status(400).json({ message: 'Resim ID parametresi eksik' });

      try {
        const image = await misionImageService.getImageById(id);
        if (!image) return res.status(404).json({ message: 'Resim bulunamadı' });

        fs.unlink(image.filePath, (err) => {
          if (err) console.error('Dosya silme hatası:', err);
        });

        await misionImageService.deleteImage(id);
        res.status(204).send();
      } catch (error: any) {
        res.status(500).json({ message: error.message || 'Resim silme başarısız' });
      }
    },
  };
}
