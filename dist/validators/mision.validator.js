"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.misionSchema = exports.contentItemSchema = void 0;
const zod_1 = require("zod");
// Sadece içerikler olacak
exports.contentItemSchema = zod_1.z.object({
    content_tr: zod_1.z.string().min(1, 'Türkçe içerik zorunludur'),
    content_en: zod_1.z.string().min(1, 'İngilizce içerik zorunludur'),
});
exports.misionSchema = zod_1.z.object({
    title_tr: zod_1.z.string().min(1, 'Türkçe başlık zorunludur'),
    title_en: zod_1.z.string().min(1, 'İngilizce başlık zorunludur'),
    contents: zod_1.z.array(exports.contentItemSchema).min(1, 'En az bir içerik eklenmelidir'),
});
//# sourceMappingURL=mision.validator.js.map