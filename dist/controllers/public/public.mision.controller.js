"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPublicMisionController = createPublicMisionController;
function createPublicMisionController(misionService) {
    return {
        getAll: async (_req, res) => {
            try {
                const misions = await misionService.getAllMisions();
                res.json(misions);
            }
            catch (error) {
                res.status(500).json({ message: error.message || 'Misyon bilgileri alınamadı' });
            }
        },
        getById: async (req, res) => {
            const id = req.params.id;
            if (!id)
                return res.status(400).json({ message: 'ID parametresi eksik' });
            try {
                const mision = await misionService.getMisionById(id);
                if (!mision)
                    return res.status(404).json({ message: 'Misyon bulunamadı' });
                res.json(mision);
            }
            catch (error) {
                res.status(500).json({ message: error.message || 'Misyon alınamadı' });
            }
        },
    };
}
//# sourceMappingURL=public.mision.controller.js.map