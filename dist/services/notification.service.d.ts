import { Notification } from '@prisma/client';
import { INotificationService } from './interfaces/INotificationService';
export declare class NotificationService implements INotificationService {
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
    markAsReadByRelatedId(relatedId: string): Promise<void>;
    deleteNotificationByRelatedId(relatedId: string): Promise<void>;
}
//# sourceMappingURL=notification.service.d.ts.map