import { z } from 'zod';
export declare const heroSchema: z.ZodObject<{
    isActive: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>;
export type HeroInput = z.infer<typeof heroSchema>;
//# sourceMappingURL=hero.validator.d.ts.map