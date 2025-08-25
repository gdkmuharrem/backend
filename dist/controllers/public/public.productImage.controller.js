"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPublicProductImageController = createPublicProductImageController;
function createPublicProductImageController(productImageService) {
    return {
        getByProduct: async (req, res) => {
            const productId = req.params.productId;
            if (!productId) {
                return res.status(400).json({ message: 'Ürün ID parametresi eksik' });
            }
            try {
                const images = await productImageService.getImagesByProduct(productId);
                res.json(images);
            }
            catch (error) {
                res.status(500).json({ message: error.message || 'Resimler alınamadı' });
            }
        },
    };
}
//# sourceMappingURL=public.productImage.controller.js.map