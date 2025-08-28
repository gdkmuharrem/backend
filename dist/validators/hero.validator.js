"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.heroSchema = void 0;
const zod_1 = require("zod");
exports.heroSchema = zod_1.z.object({
    isActive: zod_1.z.boolean().default(true),
});
//# sourceMappingURL=hero.validator.js.map