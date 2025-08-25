import { z } from 'zod';
export declare const createLogSchema: z.ZodObject<{
    ip: z.ZodString;
    action: z.ZodString;
    status: z.ZodString;
    userId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    visitorId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    country: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    city: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    userAgent: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    page: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    method: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    referer: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    details: z.ZodOptional<z.ZodNullable<z.ZodAny>>;
}, z.core.$strip>;
//# sourceMappingURL=log.validator.d.ts.map