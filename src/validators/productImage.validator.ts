import { z } from 'zod';

export const uploadParamsSchema = z.object({
  productId: z.string().min(1, 'Ürün ID zorunludur'),
});

export const deleteParamsSchema = z.object({
  id: z.string().min(1, 'Resim ID zorunludur'),
});
