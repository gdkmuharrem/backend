"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPublicCategoryController = createPublicCategoryController;
function createPublicCategoryController(categoryService) {
    return {
        getAll: async (_req, res) => {
            try {
                // Sadece aktif kategoriler
                const categories = await categoryService.getAllCategories();
                const activeCategories = categories.filter(cat => cat.isActive);
                res.json(activeCategories);
            }
            catch (error) {
                res.status(500).json({ message: error.message || 'Kategoriler alınamadı' });
            }
        },
        getById: async (req, res) => {
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
            }
            catch (error) {
                res.status(500).json({ message: error.message || 'Hata oluştu' });
            }
        },
    };
}
//# sourceMappingURL=public.category.controller.js.map