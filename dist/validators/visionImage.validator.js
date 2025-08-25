"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteParamsSchema = exports.uploadParamsSchema = void 0;
const zod_1 = require("zod");
exports.uploadParamsSchema = zod_1.z.object({
    visionId: zod_1.z.string().min(1, 'Vizyon ID zorunludur'),
});
exports.deleteParamsSchema = zod_1.z.object({
    id: zod_1.z.string().min(1, 'Resim ID zorunludur'),
});
//# sourceMappingURL=visionImage.validator.js.map