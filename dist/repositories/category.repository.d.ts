import { Category } from '@prisma/client';
import { CategoryInput } from '../validators/category.validator';
export declare function createCategory(data: CategoryInput): Promise<Category>;
export declare function getAllCategories(): Promise<Category[]>;
export declare function getCategoryById(id: string): Promise<Category | null>;
export declare function updateCategory(id: string, data: Partial<CategoryInput>): Promise<Category>;
export declare function deleteCategory(id: string): Promise<void>;
//# sourceMappingURL=category.repository.d.ts.map