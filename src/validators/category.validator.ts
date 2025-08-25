import { z } from 'zod';

export const categorySchema = z.object({
  isActive: z.boolean().optional(),
  order: z.number().int().optional(),
  parentId: z.string().nullable().optional(),
  name_tr: z.string().min(1, 'Türkçe isim zorunludur'),
  name_en: z.string().min(1, 'İngilizce isim zorunludur'),
  slug_tr: z.string().min(1, 'Türkçe slug zorunludur'),
  slug_en: z.string().min(1, 'İngilizce slug zorunludur'),
});

export type CategoryInput = z.infer<typeof categorySchema>;
