import { ContactMessage } from '@prisma/client';
import { ContactMessageInput } from '../../validators/contact.validator';

export interface IContactService {
  [x: string]: any;
  createMessage(data: ContactMessageInput): Promise<ContactMessage>;
  getAllMessages(): Promise<ContactMessage[]>;
  getMessageById(id: string): Promise<ContactMessage | null>;
  deleteMessage(id: string): Promise<void>;
  markAsRead(id: string): Promise<ContactMessage | null>;
}
