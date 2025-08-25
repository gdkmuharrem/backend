import { z } from 'zod';

export const contactMessageSchema = z.object({
  name: z.string().min(1, 'İsim zorunludur'),
  email: z.string().email('Geçerli bir e-posta girin'),
  phone: z.string().nullable().optional(), // burası önemli: hem optional hem nullable
  message: z.string().min(1, 'Mesaj boş olamaz'),
});

export type ContactMessageInput = z.infer<typeof contactMessageSchema>;
