import { z } from 'zod';

// Sadece içerikler olacak
export const contentItemSchema = z.object({
  content_tr: z.string().min(1, 'Türkçe içerik zorunludur'),
  content_en: z.string().min(1, 'İngilizce içerik zorunludur'),
});

export const visionSchema = z.object({
  title_tr: z.string().min(1, 'Türkçe başlık zorunludur'),
  title_en: z.string().min(1, 'İngilizce başlık zorunludur'),
  contents: z.array(contentItemSchema).min(1, 'En az bir içerik eklenmelidir'),
});

export type VisionInput = z.infer<typeof visionSchema>;
