import { Request, Response } from 'express';
import { IProductImageService } from '../../services/interfaces/IProductImageService';

export function createPublicProductImageController(productImageService: IProductImageService) {
  return {
    getByProduct: async (req: Request, res: Response) => {
      const productId = req.params.productId;
      if (!productId) {
        return res.status(400).json({ message: 'Ürün ID parametresi eksik' });
      }

      try {
        const images = await productImageService.getImagesByProduct(productId);
        res.json(images);
      } catch (error: any) {
        res.status(500).json({ message: error.message || 'Resimler alınamadı' });
      }
    },
  };
}
