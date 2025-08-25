"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAboutController = createAboutController;
function createAboutController(aboutService) {
    return {
        create: async (req, res) => {
            try {
                const about = await aboutService.createAbout(req.body);
                res.status(201).json(about);
            }
            catch (error) {
                res.status(500).json({ message: error.message || 'Hakkımızda oluşturulamadı' });
            }
        },
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
            try {
                const about = await aboutService.getAboutById(req.params.id);
                if (!about)
                    return res.status(404).json({ message: 'Hakkımızda bulunamadı' });
                res.json(about);
            }
            catch (error) {
                res.status(500).json({ message: error.message || 'Hata oluştu' });
            }
        },
        update: async (req, res) => {
            try {
                const updated = await aboutService.updateAbout(req.params.id, req.body);
                res.json(updated);
            }
            catch (error) {
                res.status(500).json({ message: error.message || 'Güncelleme başarısız' });
            }
        },
        delete: async (req, res) => {
            try {
                await aboutService.deleteAbout(req.params.id);
                res.status(204).send();
            }
            catch (error) {
                res.status(500).json({ message: error.message || 'Silme işlemi başarısız' });
            }
        },
    };
}
//# sourceMappingURL=about.controller.js.map