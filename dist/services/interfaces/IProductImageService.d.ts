import { ProductImage } from '@prisma/client';
export interface IProductImageService {
    uploadProductImage(productId: string, file: Express.Multer.File): Promise<ProductImage>;
    getImagesByProduct(productId: string): Promise<ProductImage[]>;
    getImageById(id: string): Promise<ProductImage | null>;
    deleteImage(id: string): Promise<void>;
}
//# sourceMappingURL=IProductImageService.d.ts.map