import { ProductImage } from '@prisma/client';
export declare function createProductImage(data: {
    productId: string;
    originalName: string;
    storedName: string;
    filePath: string;
}): Promise<ProductImage>;
export declare function getImagesByProduct(productId: string): Promise<ProductImage[]>;
export declare function getImageById(id: string): Promise<ProductImage | null>;
export declare function deleteImage(id: string): Promise<void>;
//# sourceMappingURL=productImage.repository.d.ts.map