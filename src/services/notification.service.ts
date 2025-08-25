import { Notification } from '@prisma/client';
import * as notificationRepo from '../repositories/notification.repository';
import { INotificationService } from './interfaces/INotificationService';

export class NotificationService implements INotificationService {
  createNotification(data: { type: string; title: string; body?: string; relatedId?: string; }): Promise<Notification> {
    return notificationRepo.createNotification(data);
  }

  getNotifications(unreadOnly = false): Promise<Notification[]> {
    return notificationRepo.getNotifications(unreadOnly);
  }

  markAsRead(id: string): Promise<Notification | null> {
    return notificationRepo.markNotificationAsRead(id);
  }

  countUnread(): Promise<number> {
    return notificationRepo.countUnreadNotifications();
  }

  deleteNotification(id: string): Promise<void> {
    return notificationRepo.deleteNotification(id);
  }

  async markAsReadByRelatedId(relatedId: string): Promise<void> {
    await notificationRepo.markNotificationAsReadByRelatedId(relatedId);
  }

  async deleteNotificationByRelatedId(relatedId: string): Promise<void> {
    await notificationRepo.deleteNotificationByRelatedId(relatedId);
  }

}
