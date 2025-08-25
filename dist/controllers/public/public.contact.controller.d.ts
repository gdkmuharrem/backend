import { Request, Response } from 'express';
import { IContactService } from '../../services/interfaces/IContactService';
export declare function createPublicContactController(contactService: IContactService): {
    create: (req: Request, res: Response) => Promise<void>;
};
//# sourceMappingURL=public.contact.controller.d.ts.map