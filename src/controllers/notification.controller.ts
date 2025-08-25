import { Request, Response } from 'express';
import { INotificationService } from '../services/interfaces/INotificationService';

export function createNotificationController(notificationService: INotificationService) {
  return {
    create: async (req: Request, res: Response) => {
      try {
        const notification = await notificationService.createNotification(req.body);
        res.status(201).json(notification);
      } catch (error: any) {
        res.status(500).json({ message: error.message || 'Bildirim oluşturulamadı' });
      }
    },

    getAll: async (req: Request, res: Response) => {
      try {
        const unreadOnly = req.query.unread === 'true';
        const notifications = await notificationService.getNotifications(unreadOnly);
        res.json(notifications);
      } catch (error: any) {
        res.status(500).json({ message: error.message || 'Bildirimler alınamadı' });
      }
    },

    markAsRead: async (req: Request, res: Response) => {
      try {
        const notification = await notificationService.markAsRead(req.params.id!);
        if (!notification) return res.status(404).json({ message: 'Bildirim bulunamadı' });
        res.json(notification);
      } catch (error: any) {
        res.status(500).json({ message: error.message || 'Okundu bilgisi güncellenemedi' });
      }
    },

    countUnread: async (_req: Request, res: Response) => {
      try {
        const count = await notificationService.countUnread();
        res.json({ count });
      } catch (error: any) {
        res.status(500).json({ message: error.message || 'Okunmamış bildirim sayısı alınamadı' });
      }
    },

    delete: async (req: Request, res: Response) => {
      try {
        await notificationService.deleteNotification(req.params.id!);
        res.status(204).send();
      } catch (error: any) {
        res.status(500).json({ message: error.message || 'Silme işlemi başarısız' });
      }
    },
  };
}
