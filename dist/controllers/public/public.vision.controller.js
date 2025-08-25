"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPublicVisionController = createPublicVisionController;
function createPublicVisionController(visionService) {
    return {
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
            const id = req.params.id;
            if (!id)
                return res.status(400).json({ message: 'ID parametresi eksik' });
            try {
                const vision = await visionService.getVisionById(id);
                if (!vision)
                    return res.status(404).json({ message: 'Hakkımızda bulunamadı' });
                res.json(vision);
            }
            catch (error) {
                res.status(500).json({ message: error.message || 'Hata oluştu' });
            }
        },
    };
}
//# sourceMappingURL=public.vision.controller.js.map