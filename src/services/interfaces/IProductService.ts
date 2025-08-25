import { Product } from '@prisma/client';
import { ProductInput } from '../../validators/product.validator';

export interface IProductService {
  createProduct(data: ProductInput): Promise<Product>;
  getAllProducts(): Promise<Product[]>;
  getProductById(id: string): Promise<Product | null>;
  updateProduct(id: string, data: Partial<ProductInput>): Promise<Product>;
  deleteProduct(id: string): Promise<void>;

  getProductsByCategory(categoryId: string): Promise<Product[]>;
  searchProducts(keyword: string): Promise<Product[]>;
  paginateProducts(page: number, pageSize: number): Promise<{ total: number; products: Product[] }>;
  bulkDeleteProducts(ids: string[]): Promise<void>;
}
