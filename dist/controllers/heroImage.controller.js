"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createHeroImageController = createHeroImageController;
const fs_1 = __importDefault(require("fs"));
function createHeroImageController(heroImageService) {
    return {
        upload: async (req, res) => {
            const heroId = req.params.heroId;
            if (!heroId)
                return res.status(400).json({ message: 'Hero ID parametresi eksik' });
            if (!req.file)
                return res.status(400).json({ message: 'Dosya yüklenmedi' });
            try {
                const uploadedImage = await heroImageService.uploadHeroImage(heroId, req.file);
                res.status(201).json(uploadedImage);
            }
            catch (error) {
                res.status(500).json({ message: error.message || 'Resim yükleme başarısız' });
            }
        },
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
        delete: async (req, res) => {
            const id = req.params.id;
            if (!id)
                return res.status(400).json({ message: 'Resim ID parametresi eksik' });
            try {
                const image = await heroImageService.getImageById(id);
                if (!image)
                    return res.status(404).json({ message: 'Resim bulunamadı' });
                fs_1.default.unlink(image.filePath, (err) => {
                    if (err)
                        console.error('Dosya silme hatası:', err);
                });
                await heroImageService.deleteImage(id);
                res.status(204).send();
            }
            catch (error) {
                res.status(500).json({ message: error.message || 'Resim silme başarısız' });
            }
        },
    };
}
//# sourceMappingURL=heroImage.controller.js.map