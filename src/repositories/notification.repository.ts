import { prisma } from '../prismaClient';
import { Notification } from '@prisma/client';

export interface NotificationCreateInput {
  type: string;
  title: string;
  body?: string;
  relatedId?: string;
}

export async function createNotification(data: NotificationCreateInput): Promise<Notification> {
  return prisma.notification.create({
    data,
  });
}

export async function getNotifications(unreadOnly = false): Promise<Notification[]> {
  return prisma.notification.findMany({
    where: unreadOnly ? { isRead: false } : {},
    orderBy: { createdAt: 'desc' },
  });
}

export async function markNotificationAsRead(id: string): Promise<Notification | null> {
  return prisma.notification.update({
    where: { id },
    data: { isRead: true },
  });
}

export async function countUnreadNotifications(): Promise<number> {
  return prisma.notification.count({
    where: { isRead: false },
  });
}

export async function deleteNotification(id: string): Promise<void> {
  await prisma.notification.delete({
    where: { id },
  });
}

export async function markNotificationAsReadByRelatedId(relatedId: string): Promise<void> {
  await prisma.notification.updateMany({
    where: { relatedId },
    data: { isRead: true },
  });
}

export async function deleteNotificationByRelatedId(relatedId: string): Promise<void> {
  await prisma.notification.deleteMany({
    where: { relatedId },
  });
}
