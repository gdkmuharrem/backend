"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerSchema = exports.loginSchema = void 0;
const zod_1 = require("zod");
exports.loginSchema = zod_1.z.object({
    email: zod_1.z.string().email('Geçerli bir email zorunludur'),
    password: zod_1.z.string().min(6, 'Parola en az 6 karakter olmalıdır'),
});
exports.registerSchema = exports.loginSchema; // Kayıt için aynı doğrulama yeterli
//# sourceMappingURL=auth.validator.js.map