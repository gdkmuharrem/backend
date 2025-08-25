import { z } from 'zod';
export declare const reviewSchema: z.ZodObject<{
    name: z.ZodString;
    email: z.ZodString;
    content: z.ZodString;
    productId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export declare const approvalSchema: z.ZodObject<{
    approved: z.ZodBoolean;
}, z.core.$strip>;
export declare const activeToggleSchema: z.ZodObject<{
    isActive: z.ZodBoolean;
}, z.core.$strip>;
export type ReviewInput = z.infer<typeof reviewSchema>;
export type ApprovalInput = z.infer<typeof approvalSchema>;
export type ActiveToggleInput = z.infer<typeof activeToggleSchema>;
//# sourceMappingURL=review.validator.d.ts.map