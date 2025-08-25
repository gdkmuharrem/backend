import { z } from 'zod';
export declare const productSchema: z.ZodObject<{
    name_tr: z.ZodString;
    name_en: z.ZodString;
    description_tr: z.ZodOptional<z.ZodString>;
    description_en: z.ZodOptional<z.ZodString>;
    price: z.ZodNumber;
    categoryId: z.ZodString;
    isActive: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type ProductInput = z.infer<typeof productSchema>;
//# sourceMappingURL=product.validator.d.ts.map