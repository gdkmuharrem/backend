"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadHeroModelSafe = exports.modelFileFilter = exports.uploadHeroModel = exports.uploadHeroImage = exports.uploadMisionImage = exports.uploadVisionImage = exports.uploadAboutImage = exports.uploadProductImage = void 0;
exports.getMimeTypeFromExtension = getMimeTypeFromExtension;
exports.getFileUrl = getFileUrl;
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
// Genel createUploadMiddleware fonksiyonu
function createUploadMiddleware(folderName, allowedMimeTypes, fileSizeLimit = 5 * 1024 * 1024) {
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
        if (allowedMimeTypes.includes(file.mimetype)) {
            cb(null, true);
        }
        else {
            cb(new Error(`Sadece ${allowedMimeTypes.join(', ')} türündeki dosyalar yüklenebilir`));
        }
    };
    return (0, multer_1.default)({
        storage,
        fileFilter,
        limits: { fileSize: fileSizeLimit },
    });
}
// Resim dosyaları için MIME type'lar
const imageMimeTypes = [
    'image/jpeg',
    'image/png',
    'image/gif',
    'image/webp',
    'image/svg+xml'
];
// 3D model dosyaları için MIME type'lar
const modelMimeTypes = [
    'model/obj',
    'application/octet-stream', // .obj genellikle bu MIME type ile gelir
    'model/gltf+json',
    'model/gltf-binary',
    'application/gltf-buffer',
    'application/gltf+json'
];
// Middleware'ler
exports.uploadProductImage = createUploadMiddleware('products', imageMimeTypes);
exports.uploadAboutImage = createUploadMiddleware('about', imageMimeTypes);
exports.uploadVisionImage = createUploadMiddleware('vision', imageMimeTypes);
exports.uploadMisionImage = createUploadMiddleware('mision', imageMimeTypes);
// Hero için özel middleware'ler
exports.uploadHeroImage = createUploadMiddleware('hero/images', imageMimeTypes);
exports.uploadHeroModel = createUploadMiddleware('hero/models', modelMimeTypes, 50 * 1024 * 1024); // 50 MB limit
// MIME type kontrolü için yardımcı fonksiyon
function getMimeTypeFromExtension(filename) {
    const ext = path_1.default.extname(filename).toLowerCase();
    const mimeMap = {
        '.jpg': 'image/jpeg',
        '.jpeg': 'image/jpeg',
        '.png': 'image/png',
        '.gif': 'image/gif',
        '.webp': 'image/webp',
        '.svg': 'image/svg+xml',
        '.obj': 'application/octet-stream',
        '.gltf': 'model/gltf+json',
        '.glb': 'model/gltf-binary',
        '.stl': 'application/sla'
    };
    return mimeMap[ext] || 'application/octet-stream';
}
// Helper
function getFileUrl(folder, filename) {
    const baseUrl = process.env.BASE_URL || 'http://localhost:4000';
    return `${baseUrl}/uploads/${folder}/${filename}`;
}
// Özel file filter for 3D models (ekstra güvenlik için)
const modelFileFilter = (req, file, cb) => {
    const allowedExtensions = ['.obj', '.gltf', '.glb', '.stl', '.fbx'];
    const ext = path_1.default.extname(file.originalname).toLowerCase();
    if (allowedExtensions.includes(ext)) {
        // MIME type'ı manuel olarak ayarla
        file.mimetype = getMimeTypeFromExtension(file.originalname);
        cb(null, true);
    }
    else {
        cb(new Error(`Sadece ${allowedExtensions.join(', ')} uzantılı dosyalar yüklenebilir`));
    }
};
exports.modelFileFilter = modelFileFilter;
// Özel model upload middleware (daha güvenli versiyon)
exports.uploadHeroModelSafe = (0, multer_1.default)({
    storage: multer_1.default.diskStorage({
        destination: (_req, _file, cb) => {
            const uploadFolder = path_1.default.join(process.cwd(), 'uploads', 'hero/models');
            if (!fs_1.default.existsSync(uploadFolder))
                fs_1.default.mkdirSync(uploadFolder, { recursive: true });
            cb(null, uploadFolder);
        },
        filename: (_req, file, cb) => {
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
            const ext = path_1.default.extname(file.originalname);
            cb(null, `${uniqueSuffix}${ext}`);
        },
    }),
    fileFilter: exports.modelFileFilter,
    limits: { fileSize: 50 * 1024 * 1024 }, // 50 MB
});
//# sourceMappingURL=upload.middleware.js.map