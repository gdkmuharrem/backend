"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteParamsSchema = exports.uploadParamsSchema = void 0;
const zod_1 = require("zod");
exports.uploadParamsSchema = zod_1.z.object({
    productId: zod_1.z.string().min(1, 'Ürün ID zorunludur'),
});
exports.deleteParamsSchema = zod_1.z.object({
    id: zod_1.z.string().min(1, 'Resim ID zorunludur'),
});
//# sourceMappingURL=productImage.validator.js.map