import { IProductService } from './interfaces/IProductService';
import * as productRepo from '../repositories/product.repository';
import { ProductInput } from '../validators/product.validator';

export class ProductService implements IProductService {
  createProduct(data: ProductInput) {
    return productRepo.createProduct(data);
  }

  getAllProducts() {
    return productRepo.getAllProducts();
  }

  getProductById(id: string) {
    return productRepo.getProductById(id);
  }

  updateProduct(id: string, data: Partial<ProductInput>) {
    return productRepo.updateProduct(id, data);
  }

  deleteProduct(id: string) {
    return productRepo.deleteProduct(id);
  }

  getProductsByCategory(categoryId: string) {
    return productRepo.getProductsByCategory(categoryId);
  }

  searchProducts(keyword: string) {
    return productRepo.searchProducts(keyword);
  }

  paginateProducts(page: number, pageSize: number) {
    return productRepo.paginateProducts(page, pageSize);
  }

  bulkDeleteProducts(ids: string[]) {
    return productRepo.bulkDeleteProducts(ids);
  }
}
