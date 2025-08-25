import { Category } from '@prisma/client';
import { CategoryInput } from '../../validators/category.validator';
export interface ICategoryService {
    createCategory(data: CategoryInput): Promise<Category>;
    getAllCategories(): Promise<Category[]>;
    getCategoryById(id: string): Promise<Category | null>;
    updateCategory(id: string, data: Partial<CategoryInput>): Promise<Category>;
    deleteCategory(id: string): Promise<void>;
}
//# sourceMappingURL=ICategoryService.d.ts.map