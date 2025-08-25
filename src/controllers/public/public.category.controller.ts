import { Request, Response } from 'express';
import { ICategoryService } from '../../services/interfaces/ICategoryService';

export function createPublicCategoryController(categoryService: ICategoryService) {
    return {
        getAll: async (_req: Request, res: Response) => {
            try {
                // Sadece aktif kategoriler
                const categories = await categoryService.getAllCategories();
                const activeCategories = categories.filter(cat => cat.isActive);
                res.json(activeCategories);
            } catch (error: any) {
                res.status(500).json({ message: error.message || 'Kategoriler alınamadı' });
            }
        },

        getById: async (req: Request, res: Response) => {
            const id = req.params.id;
            if (!id) {
                return res.status(400).json({ message: 'Kategori ID parametresi eksik' });
            }

            try {
                const category = await categoryService.getCategoryById(id);
                if (!category || !category.isActive) {
                    return res.status(404).json({ message: 'Kategori bulunamadı' });
                }
                res.json(category);
            } catch (error: any) {
                res.status(500).json({ message: error.message || 'Hata oluştu' });
            }
        },

    };
}
