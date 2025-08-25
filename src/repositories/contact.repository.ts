import { prisma } from '../prismaClient';
import { ContactMessageInput } from '../validators/contact.validator';
import { ContactMessage } from '@prisma/client';

export function createContactMessage(data: ContactMessageInput): Promise<ContactMessage> {
  return prisma.contactMessage.create({
    data: {
      ...data,
      phone: data.phone ?? null, // undefined ise null gönder
    },
  });
}

export function getAllContactMessages(): Promise<ContactMessage[]> {
  return prisma.contactMessage.findMany({ orderBy: { createdAt: 'desc' } });
}

export function getContactMessageById(id: string): Promise<ContactMessage | null> {
  return prisma.contactMessage.findUnique({ where: { id } });
}

export async function deleteContactMessage(id: string): Promise<void> {
  await prisma.contactMessage.delete({ where: { id } });
}

export async function markMessageAsRead(id: string): Promise<ContactMessage | null> {
  return prisma.contactMessage.update({where: { id },data: { isRead: true },});
}

