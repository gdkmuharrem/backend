"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activeToggleSchema = exports.approvalSchema = exports.reviewSchema = void 0;
const zod_1 = require("zod");
exports.reviewSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, 'İsim zorunludur'),
    email: zod_1.z.string().email('Geçerli bir e-posta girin'),
    content: zod_1.z.string().min(1, 'Yorum boş olamaz'),
    productId: zod_1.z.string().nullable().optional(),
});
exports.approvalSchema = zod_1.z.object({
    approved: zod_1.z.boolean(),
});
exports.activeToggleSchema = zod_1.z.object({
    isActive: zod_1.z.boolean(),
});
//# sourceMappingURL=review.validator.js.map