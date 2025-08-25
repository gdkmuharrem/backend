import { z } from 'zod';

export const productSchema = z.object({
  name_tr: z.string().min(1, 'Türkçe isim zorunludur'),
  name_en: z.string().min(1, 'İngilizce isim zorunludur'),
  description_tr: z.string().optional(),
  description_en: z.string().optional(),
  price: z.number().positive('Fiyat pozitif olmalıdır'),
  categoryId: z.string().min(1, 'Kategori zorunludur'),
  isActive: z.boolean().optional(),
});

export type ProductInput = z.infer<typeof productSchema>;
