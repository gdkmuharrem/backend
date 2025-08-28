"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createHeroModelController = createHeroModelController;
const fs_1 = __importDefault(require("fs"));
function createHeroModelController(heroModelService) {
    return {
        upload: async (req, res) => {
            const heroId = req.params.heroId;
            if (!heroId)
                return res.status(400).json({ message: 'Hero ID parametresi eksik' });
            if (!req.file)
                return res.status(400).json({ message: 'Dosya yüklenmedi' });
            try {
                const uploadedModel = await heroModelService.uploadHeroModel(heroId, req.file);
                res.status(201).json(uploadedModel);
            }
            catch (error) {
                res.status(500).json({ message: error.message || 'Model yükleme başarısız' });
            }
        },
        getByHero: async (req, res) => {
            const heroId = req.params.heroId;
            if (!heroId)
                return res.status(400).json({ message: 'Hero ID parametresi eksik' });
            try {
                const models = await heroModelService.getModelsByHero(heroId);
                res.json(models);
            }
            catch (error) {
                res.status(500).json({ message: error.message || 'Modeller alınamadı' });
            }
        },
        delete: async (req, res) => {
            const id = req.params.id;
            if (!id)
                return res.status(400).json({ message: 'Model ID parametresi eksik' });
            try {
                const model = await heroModelService.getModelById(id);
                if (!model)
                    return res.status(404).json({ message: 'Model bulunamadı' });
                fs_1.default.unlink(model.filePath, (err) => {
                    if (err)
                        console.error('Dosya silme hatası:', err);
                });
                await heroModelService.deleteModel(id);
                res.status(204).send();
            }
            catch (error) {
                res.status(500).json({ message: error.message || 'Model silme başarısız' });
            }
        },
    };
}
//# sourceMappingURL=heroModel.controller.js.map