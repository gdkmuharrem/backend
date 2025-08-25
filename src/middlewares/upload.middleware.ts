import multer from 'multer';
import path from 'path';
import fs from 'fs';

// İşletim sistemi bağımsız klasör yolu oluşturma
function createUploadMiddleware(folderName: string) {
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
    const allowed = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
    if (allowed.includes(file.mimetype)) cb(null, true);
    else cb(new Error('Sadece resim dosyaları yüklenebilir'));
  };

  return multer({
    storage,
    fileFilter,
    limits: { fileSize: 5 * 1024 * 1024 }, // 5 MB
  });
}

// Middleware’ler
export const uploadProductImage = createUploadMiddleware('products');
export const uploadAboutImage = createUploadMiddleware('about');
export const uploadVisionImage = createUploadMiddleware('vision');
export const uploadMisionImage = createUploadMiddleware('mision');

export function getImageUrl(folder: string, filename: string) {
  const baseUrl = process.env.BASE_URL || 'http://localhost:4000';
  return `${baseUrl}/uploads/${folder}/${filename}`;
}

