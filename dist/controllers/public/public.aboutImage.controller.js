"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPublicAboutImageController = createPublicAboutImageController;
function createPublicAboutImageController(aboutImageService) {
    return {
        getByAbout: async (req, res) => {
            const aboutId = req.params.aboutId;
            if (!aboutId)
                return res.status(400).json({ message: 'Hakkımızda ID parametresi eksik' });
            try {
                const images = await aboutImageService.getImagesByAbout(aboutId);
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
                const image = await aboutImageService.getImageById(id);
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
//# sourceMappingURL=public.aboutImage.controller.js.map