"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCategoryController = createCategoryController;
function createCategoryController(categoryService) {
    return {
        create: async (req, res) => {
            try {
                const category = await categoryService.createCategory(req.body);
                res.status(201).json(category);
            }
            catch (error) {
                res.status(500).json({ message: error.message || 'Kategori oluşturulamadı' });
            }
        },
        getAll: async (_req, res) => {
            try {
                const categories = await categoryService.getAllCategories();
                res.json(categories);
            }
            catch (error) {
                res.status(500).json({ message: error.message || 'Kategoriler alınamadı' });
            }
        },
        getById: async (req, res) => {
            try {
                const category = await categoryService.getCategoryById(req.params.id);
                if (!category)
                    return res.status(404).json({ message: 'Kategori bulunamadı' });
                res.json(category);
            }
            catch (error) {
                res.status(500).json({ message: error.message || 'Hata oluştu' });
            }
        },
        update: async (req, res) => {
            try {
                const updatedCategory = await categoryService.updateCategory(req.params.id, req.body);
                res.json(updatedCategory);
            }
            catch (error) {
                res.status(500).json({ message: error.message || 'Güncelleme başarısız' });
            }
        },
        delete: async (req, res) => {
            try {
                await categoryService.deleteCategory(req.params.id);
                res.status(204).send();
            }
            catch (error) {
                res.status(500).json({ message: error.message || 'Silme işlemi başarısız' });
            }
        },
    };
}
//# sourceMappingURL=category.controller.js.map