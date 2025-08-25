import { IProductImageService } from './interfaces/IProductImageService';
import * as repo from '../repositories/productImage.repository';
import { ProductImage } from '@prisma/client';
import path from 'path';

export class ProductImageService implements IProductImageService {
  async uploadProductImage(productId: string, file: Express.Multer.File): Promise<ProductImage> {
    // file.path: tam sistem yolu
    // uploads/products/abc.jpg şeklinde relative path oluştur
    const relativePath = path.relative(process.cwd(), file.path).replace(/\\/g, '/');

    return repo.createProductImage({
      productId,
      originalName: file.originalname,
      storedName: file.filename,
      filePath: relativePath, // örn: uploads/products/1754348554609-438020565.jpg
    });
  }

  getImagesByProduct(productId: string): Promise<ProductImage[]> {
    return repo.getImagesByProduct(productId);
  }

  getImageById(id: string): Promise<ProductImage | null> {
    return repo.getImageById(id);
  }

  deleteImage(id: string): Promise<void> {
    return repo.deleteImage(id);
  }
}
