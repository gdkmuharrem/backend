"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productSchema = void 0;
const zod_1 = require("zod");
exports.productSchema = zod_1.z.object({
    name_tr: zod_1.z.string().min(1, 'Türkçe isim zorunludur'),
    name_en: zod_1.z.string().min(1, 'İngilizce isim zorunludur'),
    description_tr: zod_1.z.string().optional(),
    description_en: zod_1.z.string().optional(),
    price: zod_1.z.number().positive('Fiyat pozitif olmalıdır'),
    categoryId: zod_1.z.string().min(1, 'Kategori zorunludur'),
    isActive: zod_1.z.boolean().optional(),
});
//# sourceMappingURL=product.validator.js.map