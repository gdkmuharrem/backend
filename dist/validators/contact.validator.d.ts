import { z } from 'zod';
export declare const contactMessageSchema: z.ZodObject<{
    name: z.ZodString;
    email: z.ZodString;
    phone: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    message: z.ZodString;
}, z.core.$strip>;
export type ContactMessageInput = z.infer<typeof contactMessageSchema>;
//# sourceMappingURL=contact.validator.d.ts.map