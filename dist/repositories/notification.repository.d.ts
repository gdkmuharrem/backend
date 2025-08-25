import { Notification } from '@prisma/client';
export interface NotificationCreateInput {
    type: string;
    title: string;
    body?: string;
    relatedId?: string;
}
export declare function createNotification(data: NotificationCreateInput): Promise<Notification>;
export declare function getNotifications(unreadOnly?: boolean): Promise<Notification[]>;
export declare function markNotificationAsRead(id: string): Promise<Notification | null>;
export declare function countUnreadNotifications(): Promise<number>;
export declare function deleteNotification(id: string): Promise<void>;
export declare function markNotificationAsReadByRelatedId(relatedId: string): Promise<void>;
export declare function deleteNotificationByRelatedId(relatedId: string): Promise<void>;
//# sourceMappingURL=notification.repository.d.ts.map