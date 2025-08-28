"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createHeroController = createHeroController;
function createHeroController(heroService) {
    return {
        create: async (req, res) => {
            try {
                const hero = await heroService.createHero(req.body);
                res.status(201).json(hero);
            }
            catch (error) {
                res.status(500).json({ message: error.message || 'Hero oluşturulamadı' });
            }
        },
        getAll: async (_req, res) => {
            try {
                const heroes = await heroService.getAllHeroes();
                res.json(heroes);
            }
            catch (error) {
                res.status(500).json({ message: error.message || 'Hero bilgileri alınamadı' });
            }
        },
        getById: async (req, res) => {
            try {
                const hero = await heroService.getHeroById(req.params.id);
                if (!hero)
                    return res.status(404).json({ message: 'Hero bulunamadı' });
                res.json(hero);
            }
            catch (error) {
                res.status(500).json({ message: error.message || 'Hata oluştu' });
            }
        },
        update: async (req, res) => {
            try {
                const updated = await heroService.updateHero(req.params.id, req.body);
                res.json(updated);
            }
            catch (error) {
                res.status(500).json({ message: error.message || 'Güncelleme başarısız' });
            }
        },
        delete: async (req, res) => {
            try {
                await heroService.deleteHero(req.params.id);
                res.status(204).send();
            }
            catch (error) {
                res.status(500).json({ message: error.message || 'Silme işlemi başarısız' });
            }
        },
    };
}
//# sourceMappingURL=hero.controller.js.map