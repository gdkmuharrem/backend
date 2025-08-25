import { ContactMessageInput } from '../validators/contact.validator';
import { ContactMessage } from '@prisma/client';
export declare function createContactMessage(data: ContactMessageInput): Promise<ContactMessage>;
export declare function getAllContactMessages(): Promise<ContactMessage[]>;
export declare function getContactMessageById(id: string): Promise<ContactMessage | null>;
export declare function deleteContactMessage(id: string): Promise<void>;
export declare function markMessageAsRead(id: string): Promise<ContactMessage | null>;
//# sourceMappingURL=contact.repository.d.ts.map