import { IProductImageService } from './interfaces/IProductImageService';
import { ProductImage } from '@prisma/client';
export declare class ProductImageService implements IProductImageService {
    uploadProductImage(productId: string, file: Express.Multer.File): Promise<ProductImage>;
    getImagesByProduct(productId: string): Promise<ProductImage[]>;
    getImageById(id: string): Promise<ProductImage | null>;
    deleteImage(id: string): Promise<void>;
}
//# sourceMappingURL=productImage.service.d.ts.map