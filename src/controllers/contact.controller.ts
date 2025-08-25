import { Request, Response } from 'express';
import { IContactService } from '../services/interfaces/IContactService';

export function createContactController(contactService: IContactService) {
  return {
    create: async (req: Request, res: Response) => {
      try {
        const contact = await contactService.createMessage(req.body);
        res.status(201).json(contact);
      } catch (error: any) {
        res.status(500).json({ message: error.message || 'Mesaj kaydedilemedi' });
      }
    },

    getAll: async (_req: Request, res: Response) => {
      try {
        const messages = await contactService.getAllMessages();
        res.json(messages);
      } catch (error: any) {
        res.status(500).json({ message: error.message || 'Mesajlar alınamadı' });
      }
    },

    getById: async (req: Request, res: Response) => {
      try {
        const message = await contactService.getMessageById(req.params.id!);
        if (!message) return res.status(404).json({ message: 'Mesaj bulunamadı' });
        res.json(message);
      } catch (error: any) {
        res.status(500).json({ message: error.message || 'Hata oluştu' });
      }
    },

    delete: async (req: Request, res: Response) => {
      try {
        await contactService.deleteMessage(req.params.id!);
        res.status(204).send();
      } catch (error: any) {
        res.status(500).json({ message: error.message || 'Silme işlemi başarısız' });
      }
    },

    markAsRead: async (req: Request, res: Response) => {
      try {
        const message = await contactService.markAsRead(req.params.id!);
        if (!message) return res.status(404).json({ message: 'Mesaj bulunamadı' });
        res.json(message);
      } catch (error: any) {
        res.status(500).json({ message: error.message || 'Okundu bilgisi güncellenemedi' });
      }
    },

  };
}
