import { Request, Response } from 'express';
import { IProductService } from '../services/interfaces/IProductService';

export function createProductController(productService: IProductService) {
  return {
    create: async (req: Request, res: Response) => {
      try {
        const product = await productService.createProduct(req.body);
        res.status(201).json(product);
      } catch (error: any) {
        res.status(500).json({ message: error.message || 'Ürün oluşturulamadı' });
      }
    },

    getAll: async (_req: Request, res: Response) => {
      try {
        const products = await productService.getAllProducts();
        res.json(products);
      } catch (error: any) {
        res.status(500).json({ message: error.message || 'Ürünler alınamadı' });
      }
    },

    getById: async (req: Request, res: Response) => {
      try {
        const product = await productService.getProductById(req.params.id!);
        if (!product) return res.status(404).json({ message: 'Ürün bulunamadı' });
        res.json(product);
      } catch (error: any) {
        res.status(500).json({ message: error.message || 'Hata oluştu' });
      }
    },

    update: async (req: Request, res: Response) => {
      try {
        const updated = await productService.updateProduct(req.params.id!, req.body);
        res.json(updated);
      } catch (error: any) {
        res.status(500).json({ message: error.message || 'Güncelleme başarısız' });
      }
    },

    delete: async (req: Request, res: Response) => {
      try {
        await productService.deleteProduct(req.params.id!);
        res.status(204).send();
      } catch (error: any) {
        res.status(500).json({ message: error.message || 'Silme işlemi başarısız' });
      }
    },

    getByCategory: async (req: Request, res: Response) => {
      const categoryId = req.params.categoryId;
      if (!categoryId) {
        return res.status(400).json({ message: 'Kategori ID parametresi eksik' });
      }
      try {
        const products = await productService.getProductsByCategory(categoryId);
        res.json(products);
      } catch (error: any) {
        res.status(500).json({ message: error.message || 'Kategoriye göre ürünler alınamadı' });
      }
    },


    search: async (req: Request, res: Response) => {
      try {
        const { keyword } = req.query;
        if (!keyword || typeof keyword !== 'string') return res.status(400).json({ message: 'Arama kelimesi eksik' });
        const results = await productService.searchProducts(keyword);
        res.json(results);
      } catch (error: any) {
        res.status(500).json({ message: error.message || 'Arama başarısız' });
      }
    },

    paginate: async (req: Request, res: Response) => {
      try {
        const page = parseInt(req.query.page as string) || 1;
        const pageSize = parseInt(req.query.pageSize as string) || 10;
        const result = await productService.paginateProducts(page, pageSize);
        res.json(result);
      } catch (error: any) {
        res.status(500).json({ message: error.message || 'Sayfalama başarısız' });
      }
    },

    bulkDelete: async (req: Request, res: Response) => {
      try {
        const { ids } = req.body;
        if (!Array.isArray(ids)) return res.status(400).json({ message: 'ID listesi eksik veya geçersiz' });
        await productService.bulkDeleteProducts(ids);
        res.status(204).send();
      } catch (error: any) {
        res.status(500).json({ message: error.message || 'Toplu silme başarısız' });
      }
    },
  };
}
