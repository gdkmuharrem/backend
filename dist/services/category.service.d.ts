import { ICategoryService } from './interfaces/ICategoryService';
import { CategoryInput } from '../validators/category.validator';
export declare class CategoryService implements ICategoryService {
    createCategory(data: CategoryInput): Promise<{
        id: string;
        createdAt: Date;
        isActive: boolean;
        order: number;
        parentId: string | null;
        name_tr: string;
        name_en: string;
        slug_tr: string;
        slug_en: string;
        updatedAt: Date;
    }>;
    getAllCategories(): Promise<{
        id: string;
        createdAt: Date;
        isActive: boolean;
        order: number;
        parentId: string | null;
        name_tr: string;
        name_en: string;
        slug_tr: string;
        slug_en: string;
        updatedAt: Date;
    }[]>;
    getCategoryById(id: string): Promise<{
        id: string;
        createdAt: Date;
        isActive: boolean;
        order: number;
        parentId: string | null;
        name_tr: string;
        name_en: string;
        slug_tr: string;
        slug_en: string;
        updatedAt: Date;
    } | null>;
    updateCategory(id: string, data: Partial<CategoryInput>): Promise<{
        id: string;
        createdAt: Date;
        isActive: boolean;
        order: number;
        parentId: string | null;
        name_tr: string;
        name_en: string;
        slug_tr: string;
        slug_en: string;
        updatedAt: Date;
    }>;
    deleteCategory(id: string): Promise<void>;
}
//# sourceMappingURL=category.service.d.ts.map