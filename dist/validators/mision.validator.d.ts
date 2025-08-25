import { z } from 'zod';
export declare const contentItemSchema: z.ZodObject<{
    content_tr: z.ZodString;
    content_en: z.ZodString;
}, z.core.$strip>;
export declare const misionSchema: z.ZodObject<{
    title_tr: z.ZodString;
    title_en: z.ZodString;
    contents: z.ZodArray<z.ZodObject<{
        content_tr: z.ZodString;
        content_en: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type MisionInput = z.infer<typeof misionSchema>;
//# sourceMappingURL=mision.validator.d.ts.map