import { Product } from '@prisma/client';
import { ProductInput } from '../validators/product.validator';
export declare function createProduct(data: ProductInput): Promise<Product>;
export declare function getAllProducts(): Promise<Product[]>;
export declare function getProductById(id: string): Promise<Product | null>;
export declare function updateProduct(id: string, data: Partial<ProductInput>): Promise<Product>;
export declare function deleteProduct(id: string): Promise<void>;
export declare function getProductsByCategory(categoryId: string): Promise<Product[]>;
export declare function searchProducts(keyword: string): Promise<Product[]>;
export declare function paginateProducts(page: number, pageSize: number): Promise<{
    total: number;
    products: Product[];
}>;
export declare function bulkDeleteProducts(ids: string[]): Promise<void>;
//# sourceMappingURL=product.repository.d.ts.map