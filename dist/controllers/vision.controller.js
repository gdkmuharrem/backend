"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createVisionController = createVisionController;
function createVisionController(visionService) {
    return {
        create: async (req, res) => {
            try {
                const vision = await visionService.createVision(req.body);
                res.status(201).json(vision);
            }
            catch (error) {
                res.status(500).json({ message: error.message || 'Hakkımızda oluşturulamadı' });
            }
        },
        getAll: async (_req, res) => {
            try {
                const visions = await visionService.getAllVisions();
                res.json(visions);
            }
            catch (error) {
                res.status(500).json({ message: error.message || 'Hakkımızda bilgileri alınamadı' });
            }
        },
        getById: async (req, res) => {
            try {
                const vision = await visionService.getVisionById(req.params.id);
                if (!vision)
                    return res.status(404).json({ message: 'Hakkımızda bulunamadı' });
                res.json(vision);
            }
            catch (error) {
                res.status(500).json({ message: error.message || 'Hata oluştu' });
            }
        },
        update: async (req, res) => {
            try {
                const updated = await visionService.updateVision(req.params.id, req.body);
                res.json(updated);
            }
            catch (error) {
                res.status(500).json({ message: error.message || 'Güncelleme başarısız' });
            }
        },
        delete: async (req, res) => {
            try {
                await visionService.deleteVision(req.params.id);
                res.status(204).send();
            }
            catch (error) {
                res.status(500).json({ message: error.message || 'Silme işlemi başarısız' });
            }
        },
    };
}
//# sourceMappingURL=vision.controller.js.map