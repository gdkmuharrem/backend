import { Notification } from '@prisma/client';

export interface INotificationService {
  createNotification(data: {
    type: string;
    title: string;
    body?: string;
    relatedId?: string;
  }): Promise<Notification>;

  getNotifications(unreadOnly?: boolean): Promise<Notification[]>;

  markAsRead(id: string): Promise<Notification | null>;

  countUnread(): Promise<number>;

  deleteNotification(id: string): Promise<void>;
}
