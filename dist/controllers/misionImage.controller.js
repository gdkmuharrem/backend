"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMisionImageController = createMisionImageController;
const fs_1 = __importDefault(require("fs"));
function createMisionImageController(misionImageService) {
    return {
        upload: async (req, res) => {
            const misionId = req.params.misionId;
            if (!misionId)
                return res.status(400).json({ message: 'Hakkımızda ID parametresi eksik' });
            if (!req.file)
                return res.status(400).json({ message: 'Dosya yüklenmedi' });
            try {
                const uploadedImage = await misionImageService.uploadMisionImage(misionId, req.file);
                res.status(201).json(uploadedImage);
            }
            catch (error) {
                res.status(500).json({ message: error.message || 'Resim yükleme başarısız' });
            }
        },
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
        delete: async (req, res) => {
            const id = req.params.id;
            if (!id)
                return res.status(400).json({ message: 'Resim ID parametresi eksik' });
            try {
                const image = await misionImageService.getImageById(id);
                if (!image)
                    return res.status(404).json({ message: 'Resim bulunamadı' });
                fs_1.default.unlink(image.filePath, (err) => {
                    if (err)
                        console.error('Dosya silme hatası:', err);
                });
                await misionImageService.deleteImage(id);
                res.status(204).send();
            }
            catch (error) {
                res.status(500).json({ message: error.message || 'Resim silme başarısız' });
            }
        },
    };
}
//# sourceMappingURL=misionImage.controller.js.map