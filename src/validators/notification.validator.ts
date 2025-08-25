import { z } from 'zod';

export const notificationCreateSchema = z.object({
  type: z.string().min(1, 'Bildirim tipi zorunludur'),
  title: z.string().min(1, 'Başlık zorunludur'),
  body: z.string().optional(),
  relatedId: z.string().optional(),
});

export type NotificationCreateInput = z.infer<typeof notificationCreateSchema>;
