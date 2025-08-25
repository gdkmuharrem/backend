"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPublicAboutController = createPublicAboutController;
function createPublicAboutController(aboutService) {
    return {
        getAll: async (_req, res) => {
            try {
                const abouts = await aboutService.getAllAbouts();
                res.json(abouts);
            }
            catch (error) {
                res.status(500).json({ message: error.message || 'Hakkımızda bilgileri alınamadı' });
            }
        },
        getById: async (req, res) => {
            const id = req.params.id;
            if (!id)
                return res.status(400).json({ message: 'ID parametresi eksik' });
            try {
                const about = await aboutService.getAboutById(id);
                if (!about)
                    return res.status(404).json({ message: 'Hakkımızda bulunamadı' });
                res.json(about);
            }
            catch (error) {
                res.status(500).json({ message: error.message || 'Hata oluştu' });
            }
        },
    };
}
//# sourceMappingURL=public.about.controller.js.map