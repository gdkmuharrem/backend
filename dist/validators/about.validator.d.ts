import { z } from 'zod';
export declare const contentItemSchema: z.ZodObject<{
    content_tr: z.ZodString;
    content_en: z.ZodString;
}, z.core.$strip>;
export declare const aboutSchema: z.ZodObject<{
    title_tr: z.ZodString;
    title_en: z.ZodString;
    contents: z.ZodArray<z.ZodObject<{
        content_tr: z.ZodString;
        content_en: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type AboutInput = z.infer<typeof aboutSchema>;
//# sourceMappingURL=about.validator.d.ts.map