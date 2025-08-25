import { ICategoryService } from './interfaces/ICategoryService';
import * as categoryRepo from '../repositories/category.repository';
import { CategoryInput } from '../validators/category.validator';

export class CategoryService implements ICategoryService {
  async createCategory(data: CategoryInput) {
    return categoryRepo.createCategory(data);
  }

  getAllCategories() {
    return categoryRepo.getAllCategories();
  }

  getCategoryById(id: string) {
    return categoryRepo.getCategoryById(id);
  }

  async updateCategory(id: string, data: Partial<CategoryInput>) {
    return categoryRepo.updateCategory(id, data);
  }

  async deleteCategory(id: string) {
    await categoryRepo.deleteCategory(id);
  }
}
