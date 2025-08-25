"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactMessageSchema = void 0;
const zod_1 = require("zod");
exports.contactMessageSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, 'İsim zorunludur'),
    email: zod_1.z.string().email('Geçerli bir e-posta girin'),
    phone: zod_1.z.string().nullable().optional(), // burası önemli: hem optional hem nullable
    message: zod_1.z.string().min(1, 'Mesaj boş olamaz'),
});
//# sourceMappingURL=contact.validator.js.map