"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLogSchema = void 0;
const zod_1 = require("zod");
exports.createLogSchema = zod_1.z.object({
    ip: zod_1.z.string(),
    action: zod_1.z.string(),
    status: zod_1.z.string(),
    userId: zod_1.z.string().nullable().optional(),
    visitorId: zod_1.z.string().nullable().optional(),
    country: zod_1.z.string().nullable().optional(),
    city: zod_1.z.string().nullable().optional(),
    userAgent: zod_1.z.string().nullable().optional(),
    page: zod_1.z.string().nullable().optional(),
    method: zod_1.z.string().nullable().optional(),
    referer: zod_1.z.string().nullable().optional(),
    details: zod_1.z.any().nullable().optional(),
});
//# sourceMappingURL=log.validator.js.map