"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteParamsSchema = exports.uploadParamsSchema = void 0;
const zod_1 = require("zod");
exports.uploadParamsSchema = zod_1.z.object({
    heroId: zod_1.z.string().min(1, 'Hero ID zorunludur'),
});
exports.deleteParamsSchema = zod_1.z.object({
    id: zod_1.z.string().min(1, 'Resim ID zorunludur'),
});
//# sourceMappingURL=heroImage.validator.js.map