import { z } from 'zod';
export declare const notificationCreateSchema: z.ZodObject<{
    type: z.ZodString;
    title: z.ZodString;
    body: z.ZodOptional<z.ZodString>;
    relatedId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type NotificationCreateInput = z.infer<typeof notificationCreateSchema>;
//# sourceMappingURL=notification.validator.d.ts.map