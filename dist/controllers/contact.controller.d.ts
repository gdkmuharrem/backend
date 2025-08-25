import { Request, Response } from 'express';
import { IContactService } from '../services/interfaces/IContactService';
export declare function createContactController(contactService: IContactService): {
    create: (req: Request, res: Response) => Promise<void>;
    getAll: (_req: Request, res: Response) => Promise<void>;
    getById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    delete: (req: Request, res: Response) => Promise<void>;
    markAsRead: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
};
//# sourceMappingURL=contact.controller.d.ts.map