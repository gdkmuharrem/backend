import { Request, Response } from 'express';
import { IProductImageService } from '../services/interfaces/IProductImageService';
import fs from 'fs';

export function createProductImageController(productImageService: IProductImageService) {
  return {
    upload: async (req: Request, res: Response) => {
      const productId = req.params.productId;
      if (!productId) return res.status(400).json({ message: 'Ürün ID parametresi eksik' });

      if (!req.file) return res.status(400).json({ message: 'Dosya yüklenmedi' });

      try {
        const uploadedImage = await productImageService.uploadProductImage(productId, req.file);
        res.status(201).json(uploadedImage);
      } catch (error: any) {
        res.status(500).json({ message: error.message || 'Resim yükleme başarısız' });
      }
    },

    getByProduct: async (req: Request, res: Response) => {
      const productId = req.params.productId;
      if (!productId) return res.status(400).json({ message: 'Ürün ID parametresi eksik' });

      try {
        const images = await productImageService.getImagesByProduct(productId);
        res.json(images);
      } catch (error: any) {
        res.status(500).json({ message: error.message || 'Resimler alınamadı' });
      }
    },

    delete: async (req: Request, res: Response) => {
      const id = req.params.id;
      if (!id) return res.status(400).json({ message: 'Resim ID parametresi eksik' });

      try {
        const image = await productImageService.getImageById(id);
        if (!image) return res.status(404).json({ message: 'Resim bulunamadı' });

        // Dosyayı diskten sil (async hata loglanır)
        fs.unlink(image.filePath, (err) => {
          if (err) console.error('Dosya silme hatası:', err);
        });

        await productImageService.deleteImage(id);
        res.status(204).send();
      } catch (error: any) {
        res.status(500).json({ message: error.message || 'Resim silme başarısız' });
      }
    },
  };
}
