"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notificationCreateSchema = void 0;
const zod_1 = require("zod");
exports.notificationCreateSchema = zod_1.z.object({
    type: zod_1.z.string().min(1, 'Bildirim tipi zorunludur'),
    title: zod_1.z.string().min(1, 'Başlık zorunludur'),
    body: zod_1.z.string().optional(),
    relatedId: zod_1.z.string().optional(),
});
//# sourceMappingURL=notification.validator.js.map