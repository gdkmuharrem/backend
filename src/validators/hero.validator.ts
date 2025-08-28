import { z } from 'zod';

export const heroSchema = z.object({
  isActive: z.boolean().default(true),
});

export type HeroInput = z.infer<typeof heroSchema>;