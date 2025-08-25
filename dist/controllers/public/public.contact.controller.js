"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPublicContactController = createPublicContactController;
function createPublicContactController(contactService) {
    return {
        create: async (req, res) => {
            try {
                const message = await contactService.createMessage(req.body);
                res.status(201).json(message);
            }
            catch (error) {
                res.status(500).json({ message: error.message || 'Mesaj kaydedilemedi' });
            }
        },
    };
}
//# sourceMappingURL=public.contact.controller.js.map