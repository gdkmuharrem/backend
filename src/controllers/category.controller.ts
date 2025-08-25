import { Request, Response } from 'express';
import { ICategoryService } from '../services/interfaces/ICategoryService';

export function createCategoryController(categoryService: ICategoryService) {
  return {
    create: async (req: Request, res: Response) => {
      try {
        const category = await categoryService.createCategory(req.body);
        res.status(201).json(category);
      } catch (error: any) {
        res.status(500).json({ message: error.message || 'Kategori oluşturulamadı' });
      }
    },

    getAll: async (_req: Request, res: Response) => {
      try {
        const categories = await categoryService.getAllCategories();
        res.json(categories);
      } catch (error: any) {
        res.status(500).json({ message: error.message || 'Kategoriler alınamadı' });
      }
    },

    getById: async (req: Request, res: Response) => {
      try {
        const category = await categoryService.getCategoryById(req.params.id!);
        if (!category) return res.status(404).json({ message: 'Kategori bulunamadı' });
        res.json(category);
      } catch (error: any) {
        res.status(500).json({ message: error.message || 'Hata oluştu' });
      }
    },

    update: async (req: Request, res: Response) => {
      try {
        const updatedCategory = await categoryService.updateCategory(req.params.id!, req.body);
        res.json(updatedCategory);
      } catch (error: any) {
        res.status(500).json({ message: error.message || 'Güncelleme başarısız' });
      }
    },

    delete: async (req: Request, res: Response) => {
      try {
        await categoryService.deleteCategory(req.params.id!);
        res.status(204).send();
      } catch (error: any) {
        res.status(500).json({ message: error.message || 'Silme işlemi başarısız' });
      }
    },
  };
}
