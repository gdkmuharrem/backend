import multer from 'multer';
import path from 'path';
import fs from 'fs';

// Genel createUploadMiddleware fonksiyonu
function createUploadMiddleware(folderName: string, allowedMimeTypes: string[], fileSizeLimit: number = 5 * 1024 * 1024) {
  const uploadFolder = path.join(process.cwd(), 'uploads', folderName);
  if (!fs.existsSync(uploadFolder)) fs.mkdirSync(uploadFolder, { recursive: true });

  const storage = multer.diskStorage({
    destination: (_req, _file, cb) => {
      cb(null, uploadFolder);
    },
    filename: (_req, file, cb) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
      const ext = path.extname(file.originalname);
      cb(null, `${uniqueSuffix}${ext}`);
    },
  });

  const fileFilter = (_req: any, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
    if (allowedMimeTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error(`Sadece ${allowedMimeTypes.join(', ')} türündeki dosyalar yüklenebilir`));
    }
  };

  return multer({
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
export const uploadProductImage = createUploadMiddleware('products', imageMimeTypes);
export const uploadAboutImage = createUploadMiddleware('about', imageMimeTypes);
export const uploadVisionImage = createUploadMiddleware('vision', imageMimeTypes);
export const uploadMisionImage = createUploadMiddleware('mision', imageMimeTypes);

// Hero için özel middleware'ler
export const uploadHeroImage = createUploadMiddleware('hero/images', imageMimeTypes);
export const uploadHeroModel = createUploadMiddleware('hero/models', modelMimeTypes, 50 * 1024 * 1024); // 50 MB limit

// MIME type kontrolü için yardımcı fonksiyon
export function getMimeTypeFromExtension(filename: string): string {
  const ext = path.extname(filename).toLowerCase();
  const mimeMap: { [key: string]: string } = {
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
export function getFileUrl(folder: string, filename: string) {
  const baseUrl = process.env.BASE_URL || 'http://localhost:4000';
  return `${baseUrl}/uploads/${folder}/${filename}`;
}

// Özel file filter for 3D models (ekstra güvenlik için)
export const modelFileFilter = (req: any, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
  const allowedExtensions = ['.obj', '.gltf', '.glb', '.stl', '.fbx'];
  const ext = path.extname(file.originalname).toLowerCase();
  
  if (allowedExtensions.includes(ext)) {
    // MIME type'ı manuel olarak ayarla
    file.mimetype = getMimeTypeFromExtension(file.originalname);
    cb(null, true);
  } else {
    cb(new Error(`Sadece ${allowedExtensions.join(', ')} uzantılı dosyalar yüklenebilir`));
  }
};

// Özel model upload middleware (daha güvenli versiyon)
export const uploadHeroModelSafe = multer({
  storage: multer.diskStorage({
    destination: (_req, _file, cb) => {
      const uploadFolder = path.join(process.cwd(), 'uploads', 'hero/models');
      if (!fs.existsSync(uploadFolder)) fs.mkdirSync(uploadFolder, { recursive: true });
      cb(null, uploadFolder);
    },
    filename: (_req, file, cb) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
      const ext = path.extname(file.originalname);
      cb(null, `${uniqueSuffix}${ext}`);
    },
  }),
  fileFilter: modelFileFilter,
  limits: { fileSize: 50 * 1024 * 1024 }, // 50 MB
});