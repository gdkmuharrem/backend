import { z } from 'zod';

export const createLogSchema = z.object({
  ip: z.string(),
  action: z.string(),
  status: z.string(),

  userId: z.string().nullable().optional(),
  visitorId: z.string().nullable().optional(),
  country: z.string().nullable().optional(),
  city: z.string().nullable().optional(),
  userAgent: z.string().nullable().optional(),
  page: z.string().nullable().optional(),
  method: z.string().nullable().optional(),
  referer: z.string().nullable().optional(),
  details: z.any().nullable().optional(),
});
