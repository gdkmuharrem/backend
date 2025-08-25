"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPublicVisionImageController = createPublicVisionImageController;
function createPublicVisionImageController(visionImageService) {
    return {
        getByVision: async (req, res) => {
            const visionId = req.params.visionId;
            if (!visionId)
                return res.status(400).json({ message: 'Hakkımızda ID parametresi eksik' });
            try {
                const images = await visionImageService.getImagesByVision(visionId);
                res.json(images);
            }
            catch (error) {
                res.status(500).json({ message: error.message || 'Resimler alınamadı' });
            }
        },
        getById: async (req, res) => {
            const id = req.params.id;
            if (!id)
                return res.status(400).json({ message: 'Resim ID parametresi eksik' });
            try {
                const image = await visionImageService.getImageById(id);
                if (!image)
                    return res.status(404).json({ message: 'Resim bulunamadı' });
                res.json(image);
            }
            catch (error) {
                res.status(500).json({ message: error.message || 'Resim alınamadı' });
            }
        },
    };
}
//# sourceMappingURL=public.visionImage.controller.js.map