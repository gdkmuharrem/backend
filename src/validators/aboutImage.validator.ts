import { z } from 'zod';

export const uploadParamsSchema = z.object({
  aboutId: z.string().min(1, 'Hakkımızda ID zorunludur'),
});

export const deleteParamsSchema = z.object({
  id: z.string().min(1, 'Resim ID zorunludur'),
});
