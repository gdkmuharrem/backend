import { Request, Response } from 'express';
import { IContactService } from '../../services/interfaces/IContactService';

export function createPublicContactController(contactService: IContactService) {
  return {
    create: async (req: Request, res: Response) => {
      try {
        const message = await contactService.createMessage(req.body);
        res.status(201).json(message);
      } catch (error: any) {
        res.status(500).json({ message: error.message || 'Mesaj kaydedilemedi' });
      }
    },
  };
}
