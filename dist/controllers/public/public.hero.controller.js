"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPublicHeroController = createPublicHeroController;
function createPublicHeroController(heroService) {
    return {
        // Tüm hero kayıtlarını getir (frontend için)
        getAll: async (_req, res) => {
            try {
                const heroes = await heroService.getAllHeroes();
                res.json(heroes);
            }
            catch (error) {
                res.status(500).json({ message: error.message || 'Hero bilgileri alınamadı' });
            }
        },
        // ID ile hero getir (frontend için)
        getById: async (req, res) => {
            const id = req.params.id;
            if (!id)
                return res.status(400).json({ message: 'ID parametresi eksik' });
            try {
                const hero = await heroService.getHeroById(id);
                if (!hero)
                    return res.status(404).json({ message: 'Hero bulunamadı' });
                res.json(hero);
            }
            catch (error) {
                res.status(500).json({ message: error.message || 'Hata oluştu' });
            }
        },
        // Aktif hero kaydını getir (frontend için)
        getActive: async (_req, res) => {
            try {
                const heroes = await heroService.getAllHeroes();
                const activeHero = heroes.find(hero => hero.isActive);
                if (!activeHero) {
                    return res.status(404).json({ message: 'Aktif hero bulunamadı' });
                }
                res.json(activeHero);
            }
            catch (error) {
                res.status(500).json({ message: error.message || 'Hero bilgileri alınamadı' });
            }
        },
    };
}
//# sourceMappingURL=public.hero.controller.js.map