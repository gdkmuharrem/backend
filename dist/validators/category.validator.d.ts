import { z } from 'zod';
export declare const categorySchema: z.ZodObject<{
    isActive: z.ZodOptional<z.ZodBoolean>;
    order: z.ZodOptional<z.ZodNumber>;
    parentId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    name_tr: z.ZodString;
    name_en: z.ZodString;
    slug_tr: z.ZodString;
    slug_en: z.ZodString;
}, z.core.$strip>;
export type CategoryInput = z.infer<typeof categorySchema>;
//# sourceMappingURL=category.validator.d.ts.map