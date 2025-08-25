import { z } from 'zod';

export const uploadParamsSchema = z.object({
  visionId: z.string().min(1, 'Vizyon ID zorunludur'),
});

export const deleteParamsSchema = z.object({
  id: z.string().min(1, 'Resim ID zorunludur'),
});
