"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categorySchema = void 0;
const zod_1 = require("zod");
exports.categorySchema = zod_1.z.object({
    isActive: zod_1.z.boolean().optional(),
    order: zod_1.z.number().int().optional(),
    parentId: zod_1.z.string().nullable().optional(),
    name_tr: zod_1.z.string().min(1, 'Türkçe isim zorunludur'),
    name_en: zod_1.z.string().min(1, 'İngilizce isim zorunludur'),
    slug_tr: zod_1.z.string().min(1, 'Türkçe slug zorunludur'),
    slug_en: zod_1.z.string().min(1, 'İngilizce slug zorunludur'),
});
//# sourceMappingURL=category.validator.js.map