"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadMisionImage = exports.uploadVisionImage = exports.uploadAboutImage = exports.uploadProductImage = void 0;
exports.getImageUrl = getImageUrl;
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
// İşletim sistemi bağımsız klasör yolu oluşturma
function createUploadMiddleware(folderName) {
    const uploadFolder = path_1.default.join(process.cwd(), 'uploads', folderName);
    if (!fs_1.default.existsSync(uploadFolder))
        fs_1.default.mkdirSync(uploadFolder, { recursive: true });
    const storage = multer_1.default.diskStorage({
        destination: (_req, _file, cb) => {
            cb(null, uploadFolder);
        },
        filename: (_req, file, cb) => {
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
            const ext = path_1.default.extname(file.originalname);
            cb(null, `${uniqueSuffix}${ext}`);
        },
    });
    const fileFilter = (_req, file, cb) => {
        const allowed = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
        if (allowed.includes(file.mimetype))
            cb(null, true);
        else
            cb(new Error('Sadece resim dosyaları yüklenebilir'));
    };
    return (0, multer_1.default)({
        storage,
        fileFilter,
        limits: { fileSize: 5 * 1024 * 1024 }, // 5 MB
    });
}
// Middleware’ler
exports.uploadProductImage = createUploadMiddleware('products');
exports.uploadAboutImage = createUploadMiddleware('about');
exports.uploadVisionImage = createUploadMiddleware('vision');
exports.uploadMisionImage = createUploadMiddleware('mision');
function getImageUrl(folder, filename) {
    const baseUrl = process.env.BASE_URL || 'http://localhost:4000';
    return `${baseUrl}/uploads/${folder}/${filename}`;
}
//# sourceMappingURL=upload.middleware.js.map