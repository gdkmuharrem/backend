"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createContactController = createContactController;
function createContactController(contactService) {
    return {
        create: async (req, res) => {
            try {
                const contact = await contactService.createMessage(req.body);
                res.status(201).json(contact);
            }
            catch (error) {
                res.status(500).json({ message: error.message || 'Mesaj kaydedilemedi' });
            }
        },
        getAll: async (_req, res) => {
            try {
                const messages = await contactService.getAllMessages();
                res.json(messages);
            }
            catch (error) {
                res.status(500).json({ message: error.message || 'Mesajlar alınamadı' });
            }
        },
        getById: async (req, res) => {
            try {
                const message = await contactService.getMessageById(req.params.id);
                if (!message)
                    return res.status(404).json({ message: 'Mesaj bulunamadı' });
                res.json(message);
            }
            catch (error) {
                res.status(500).json({ message: error.message || 'Hata oluştu' });
            }
        },
        delete: async (req, res) => {
            try {
                await contactService.deleteMessage(req.params.id);
                res.status(204).send();
            }
            catch (error) {
                res.status(500).json({ message: error.message || 'Silme işlemi başarısız' });
            }
        },
        markAsRead: async (req, res) => {
            try {
                const message = await contactService.markAsRead(req.params.id);
                if (!message)
                    return res.status(404).json({ message: 'Mesaj bulunamadı' });
                res.json(message);
            }
            catch (error) {
                res.status(500).json({ message: error.message || 'Okundu bilgisi güncellenemedi' });
            }
        },
    };
}
//# sourceMappingURL=contact.controller.js.map