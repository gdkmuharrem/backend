"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPublicMisionImageController = createPublicMisionImageController;
function createPublicMisionImageController(misionImageService) {
    return {
        getByMision: async (req, res) => {
            const misionId = req.params.misionId;
            if (!misionId)
                return res.status(400).json({ message: 'Hakkımızda ID parametresi eksik' });
            try {
                const images = await misionImageService.getImagesByMision(misionId);
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
                const image = await misionImageService.getImageById(id);
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
//# sourceMappingURL=public.misionImage.controller.js.map