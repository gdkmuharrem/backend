"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPublicHeroImageController = createPublicHeroImageController;
function createPublicHeroImageController(heroImageService) {
    return {
        // Hero'ya ait resimleri getir (frontend için)
        getByHero: async (req, res) => {
            const heroId = req.params.heroId;
            if (!heroId)
                return res.status(400).json({ message: 'Hero ID parametresi eksik' });
            try {
                const images = await heroImageService.getImagesByHero(heroId);
                res.json(images);
            }
            catch (error) {
                res.status(500).json({ message: error.message || 'Resimler alınamadı' });
            }
        },
        // ID ile resim getir (frontend için)
        getById: async (req, res) => {
            const id = req.params.id;
            if (!id)
                return res.status(400).json({ message: 'Resim ID parametresi eksik' });
            try {
                const image = await heroImageService.getImageById(id);
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
//# sourceMappingURL=public.heroImage.controller.js.map