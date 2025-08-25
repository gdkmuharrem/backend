"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNotificationController = createNotificationController;
function createNotificationController(notificationService) {
    return {
        create: async (req, res) => {
            try {
                const notification = await notificationService.createNotification(req.body);
                res.status(201).json(notification);
            }
            catch (error) {
                res.status(500).json({ message: error.message || 'Bildirim oluşturulamadı' });
            }
        },
        getAll: async (req, res) => {
            try {
                const unreadOnly = req.query.unread === 'true';
                const notifications = await notificationService.getNotifications(unreadOnly);
                res.json(notifications);
            }
            catch (error) {
                res.status(500).json({ message: error.message || 'Bildirimler alınamadı' });
            }
        },
        markAsRead: async (req, res) => {
            try {
                const notification = await notificationService.markAsRead(req.params.id);
                if (!notification)
                    return res.status(404).json({ message: 'Bildirim bulunamadı' });
                res.json(notification);
            }
            catch (error) {
                res.status(500).json({ message: error.message || 'Okundu bilgisi güncellenemedi' });
            }
        },
        countUnread: async (_req, res) => {
            try {
                const count = await notificationService.countUnread();
                res.json({ count });
            }
            catch (error) {
                res.status(500).json({ message: error.message || 'Okunmamış bildirim sayısı alınamadı' });
            }
        },
        delete: async (req, res) => {
            try {
                await notificationService.deleteNotification(req.params.id);
                res.status(204).send();
            }
            catch (error) {
                res.status(500).json({ message: error.message || 'Silme işlemi başarısız' });
            }
        },
    };
}
//# sourceMappingURL=notification.controller.js.map