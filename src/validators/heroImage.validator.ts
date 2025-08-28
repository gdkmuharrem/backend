import { z } from 'zod';

export const uploadParamsSchema = z.object({
  heroId: z.string().min(1, 'Hero ID zorunludur'),
});

export const deleteParamsSchema = z.object({
  id: z.string().min(1, 'Resim ID zorunludur'),
});