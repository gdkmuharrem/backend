import { Request, Response } from 'express';
import { IProductService } from '../../services/interfaces/IProductService';

export function createPublicProductController(productService: IProductService) {
  return {
    getAll: async (_req: Request, res: Response) => {
      try {
        const products = await productService.getAllProducts();
        const activeProducts = products.filter(p => p.isActive);
        res.json(activeProducts);
      } catch (error: any) {
        res.status(500).json({ message: error.message || 'Ürünler alınamadı' });
      }
    },

    getById: async (req: Request, res: Response) => {
      const id = req.params.id;
      if (!id) return res.status(400).json({ message: 'Ürün ID parametresi eksik' });

      try {
        const product = await productService.getProductById(id);
        if (!product || !product.isActive) return res.status(404).json({ message: 'Ürün bulunamadı' });
        res.json(product);
      } catch (error: any) {
        res.status(500).json({ message: error.message || 'Hata oluştu' });
      }
    },

    getByCategory: async (req: Request, res: Response) => {
      const categoryId = req.params.categoryId;
      if (!categoryId) return res.status(400).json({ message: 'Kategori ID parametresi eksik' });

      try {
        const products = await productService.getProductsByCategory(categoryId);
        const activeProducts = products.filter(p => p.isActive);
        res.json(activeProducts);
      } catch (error: any) {
        res.status(500).json({ message: error.message || 'Kategoriye göre ürünler alınamadı' });
      }
    },

    search: async (req: Request, res: Response) => {
      const keyword = req.query.keyword;
      if (!keyword || typeof keyword !== 'string') return res.status(400).json({ message: 'Arama kelimesi eksik' });

      try {
        const results = await productService.searchProducts(keyword);
        const activeResults = results.filter(p => p.isActive);
        res.json(activeResults);
      } catch (error: any) {
        res.status(500).json({ message: error.message || 'Arama başarısız' });
      }
    },

    paginate: async (req: Request, res: Response) => {
      const page = parseInt(req.query.page as string) || 1;
      const pageSize = parseInt(req.query.pageSize as string) || 10;

      try {
        const result = await productService.paginateProducts(page, pageSize);
        // Sadece aktif ürünleri döndür
        result.products = result.products.filter(p => p.isActive);
        res.json(result);
      } catch (error: any) {
        res.status(500).json({ message: error.message || 'Sayfalama başarısız' });
      }
    },
  };
}
