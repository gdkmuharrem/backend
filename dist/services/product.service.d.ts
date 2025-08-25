import { IProductService } from './interfaces/IProductService';
import { ProductInput } from '../validators/product.validator';
export declare class ProductService implements IProductService {
    createProduct(data: ProductInput): Promise<{
        id: string;
        createdAt: Date;
        isActive: boolean;
        name_tr: string;
        name_en: string;
        updatedAt: Date;
        description_tr: string | null;
        description_en: string | null;
        price: number;
        categoryId: string;
    }>;
    getAllProducts(): Promise<{
        id: string;
        createdAt: Date;
        isActive: boolean;
        name_tr: string;
        name_en: string;
        updatedAt: Date;
        description_tr: string | null;
        description_en: string | null;
        price: number;
        categoryId: string;
    }[]>;
    getProductById(id: string): Promise<{
        id: string;
        createdAt: Date;
        isActive: boolean;
        name_tr: string;
        name_en: string;
        updatedAt: Date;
        description_tr: string | null;
        description_en: string | null;
        price: number;
        categoryId: string;
    } | null>;
    updateProduct(id: string, data: Partial<ProductInput>): Promise<{
        id: string;
        createdAt: Date;
        isActive: boolean;
        name_tr: string;
        name_en: string;
        updatedAt: Date;
        description_tr: string | null;
        description_en: string | null;
        price: number;
        categoryId: string;
    }>;
    deleteProduct(id: string): Promise<void>;
    getProductsByCategory(categoryId: string): Promise<{
        id: string;
        createdAt: Date;
        isActive: boolean;
        name_tr: string;
        name_en: string;
        updatedAt: Date;
        description_tr: string | null;
        description_en: string | null;
        price: number;
        categoryId: string;
    }[]>;
    searchProducts(keyword: string): Promise<{
        id: string;
        createdAt: Date;
        isActive: boolean;
        name_tr: string;
        name_en: string;
        updatedAt: Date;
        description_tr: string | null;
        description_en: string | null;
        price: number;
        categoryId: string;
    }[]>;
    paginateProducts(page: number, pageSize: number): Promise<{
        total: number;
        products: import(".prisma/client").Product[];
    }>;
    bulkDeleteProducts(ids: string[]): Promise<void>;
}
//# sourceMappingURL=product.service.d.ts.map