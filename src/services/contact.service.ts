import { ContactMessage } from '@prisma/client';
import { IContactService } from './interfaces/IContactService';
import * as contactRepo from '../repositories/contact.repository';
import { ContactMessageInput } from '../validators/contact.validator';
import { NotificationService } from './notification.service';

export class ContactService implements IContactService {
  private notificationService = new NotificationService();

  async createMessage(data: ContactMessageInput): Promise<ContactMessage> {
    const message = await contactRepo.createContactMessage(data);

    const now = new Date().toLocaleString('tr-TR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });

    const trimmedMessage = data.message.length > 100
      ? data.message.slice(0, 100) + '...'
      : data.message;

    const title = `${data.name} (${data.email})`;
    const body = `Telefon: ${data.phone}\nTarih: ${now}\nMesaj: ${trimmedMessage}`;

    await this.notificationService.createNotification({
      type: 'message',
      title,
      body,
      relatedId: message.id,
    });

    return message;
  }

  getAllMessages(): Promise<ContactMessage[]> {
    return contactRepo.getAllContactMessages();
  }

  getMessageById(id: string): Promise<ContactMessage | null> {
    return contactRepo.getContactMessageById(id);
  }

  async deleteMessage(id: string): Promise<void> {
    await contactRepo.deleteContactMessage(id);
    await this.notificationService.deleteNotificationByRelatedId(id);
  }

  async markAsRead(id: string): Promise<ContactMessage | null> {
    const message = await contactRepo.markMessageAsRead(id);
    if (message) {
      await this.notificationService.markAsReadByRelatedId(id);
    }
    return message;
  }
}
