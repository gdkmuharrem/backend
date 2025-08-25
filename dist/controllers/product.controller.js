"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProductController = createProductController;
function createProductController(productService) {
    return {
        create: async (req, res) => {
            try {
                const product = await productService.createProduct(req.body);
                res.status(201).json(product);
            }
            catch (error) {
                res.status(500).json({ message: error.message || 'Ürün oluşturulamadı' });
            }
        },
        getAll: async (_req, res) => {
            try {
                const products = await productService.getAllProducts();
                res.json(products);
            }
            catch (error) {
                res.status(500).json({ message: error.message || 'Ürünler alınamadı' });
            }
        },
        getById: async (req, res) => {
            try {
                const product = await productService.getProductById(req.params.id);
                if (!product)
                    return res.status(404).json({ message: 'Ürün bulunamadı' });
                res.json(product);
            }
            catch (error) {
                res.status(500).json({ message: error.message || 'Hata oluştu' });
            }
        },
        update: async (req, res) => {
            try {
                const updated = await productService.updateProduct(req.params.id, req.body);
                res.json(updated);
            }
            catch (error) {
                res.status(500).json({ message: error.message || 'Güncelleme başarısız' });
            }
        },
        delete: async (req, res) => {
            try {
                await productService.deleteProduct(req.params.id);
                res.status(204).send();
            }
            catch (error) {
                res.status(500).json({ message: error.message || 'Silme işlemi başarısız' });
            }
        },
        getByCategory: async (req, res) => {
            const categoryId = req.params.categoryId;
            if (!categoryId) {
                return res.status(400).json({ message: 'Kategori ID parametresi eksik' });
            }
            try {
                const products = await productService.getProductsByCategory(categoryId);
                res.json(products);
            }
            catch (error) {
                res.status(500).json({ message: error.message || 'Kategoriye göre ürünler alınamadı' });
            }
        },
        search: async (req, res) => {
            try {
                const { keyword } = req.query;
                if (!keyword || typeof keyword !== 'string')
                    return res.status(400).json({ message: 'Arama kelimesi eksik' });
                const results = await productService.searchProducts(keyword);
                res.json(results);
            }
            catch (error) {
                res.status(500).json({ message: error.message || 'Arama başarısız' });
            }
        },
        paginate: async (req, res) => {
            try {
                const page = parseInt(req.query.page) || 1;
                const pageSize = parseInt(req.query.pageSize) || 10;
                const result = await productService.paginateProducts(page, pageSize);
                res.json(result);
            }
            catch (error) {
                res.status(500).json({ message: error.message || 'Sayfalama başarısız' });
            }
        },
        bulkDelete: async (req, res) => {
            try {
                const { ids } = req.body;
                if (!Array.isArray(ids))
                    return res.status(400).json({ message: 'ID listesi eksik veya geçersiz' });
                await productService.bulkDeleteProducts(ids);
                res.status(204).send();
            }
            catch (error) {
                res.status(500).json({ message: error.message || 'Toplu silme başarısız' });
            }
        },
    };
}
//# sourceMappingURL=product.controller.js.map