"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMisionController = createMisionController;
function createMisionController(misionService) {
    return {
        create: async (req, res) => {
            try {
                const mision = await misionService.createMision(req.body);
                res.status(201).json(mision);
            }
            catch (error) {
                res.status(500).json({ message: error.message || 'Hakkımızda oluşturulamadı' });
            }
        },
        getAll: async (_req, res) => {
            try {
                const misions = await misionService.getAllMisions();
                res.json(misions);
            }
            catch (error) {
                res.status(500).json({ message: error.message || 'Hakkımızda bilgileri alınamadı' });
            }
        },
        getById: async (req, res) => {
            try {
                const mision = await misionService.getMisionById(req.params.id);
                if (!mision)
                    return res.status(404).json({ message: 'Hakkımızda bulunamadı' });
                res.json(mision);
            }
            catch (error) {
                res.status(500).json({ message: error.message || 'Hata oluştu' });
            }
        },
        update: async (req, res) => {
            try {
                const updated = await misionService.updateMision(req.params.id, req.body);
                res.json(updated);
            }
            catch (error) {
                res.status(500).json({ message: error.message || 'Güncelleme başarısız' });
            }
        },
        delete: async (req, res) => {
            try {
                await misionService.deleteMision(req.params.id);
                res.status(204).send();
            }
            catch (error) {
                res.status(500).json({ message: error.message || 'Silme işlemi başarısız' });
            }
        },
    };
}
//# sourceMappingURL=mision.controller.js.map