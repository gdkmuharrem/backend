import { z } from 'zod';

export const reviewSchema = z.object({
  name: z.string().min(1, 'İsim zorunludur'),
  email: z.string().email('Geçerli bir e-posta girin'),
  content: z.string().min(1, 'Yorum boş olamaz'),
  productId: z.string().nullable().optional(),
});

export const approvalSchema = z.object({
  approved: z.boolean(),
});

export const activeToggleSchema = z.object({
  isActive: z.boolean(),
});

export type ReviewInput = z.infer<typeof reviewSchema>;
export type ApprovalInput = z.infer<typeof approvalSchema>;
export type ActiveToggleInput = z.infer<typeof activeToggleSchema>;
