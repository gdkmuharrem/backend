import { ContactMessage } from '@prisma/client';
import { IContactService } from './interfaces/IContactService';
import { ContactMessageInput } from '../validators/contact.validator';
export declare class ContactService implements IContactService {
    private notificationService;
    createMessage(data: ContactMessageInput): Promise<ContactMessage>;
    getAllMessages(): Promise<ContactMessage[]>;
    getMessageById(id: string): Promise<ContactMessage | null>;
    deleteMessage(id: string): Promise<void>;
    markAsRead(id: string): Promise<ContactMessage | null>;
}
//# sourceMappingURL=contact.service.d.ts.map