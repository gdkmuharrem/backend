"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPublicHeroModelController = createPublicHeroModelController;
function createPublicHeroModelController(heroModelService) {
    return {
        // Hero'ya ait modelleri getir (frontend için)
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
        // ID ile model getir (frontend için)
        getById: async (req, res) => {
            const id = req.params.id;
            if (!id)
                return res.status(400).json({ message: 'Model ID parametresi eksik' });
            try {
                const model = await heroModelService.getModelById(id);
                if (!model)
                    return res.status(404).json({ message: 'Model bulunamadı' });
                res.json(model);
            }
            catch (error) {
                res.status(500).json({ message: error.message || 'Model alınamadı' });
            }
        },
    };
}
//# sourceMappingURL=public.heroModel.controller.js.map