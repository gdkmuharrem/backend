import multer from 'multer';
export declare const uploadProductImage: multer.Multer;
export declare const uploadAboutImage: multer.Multer;
export declare const uploadVisionImage: multer.Multer;
export declare const uploadMisionImage: multer.Multer;
export declare const uploadHeroImage: multer.Multer;
export declare const uploadHeroModel: multer.Multer;
export declare function getMimeTypeFromExtension(filename: string): string;
export declare function getFileUrl(folder: string, filename: string): string;
export declare const modelFileFilter: (req: any, file: Express.Multer.File, cb: multer.FileFilterCallback) => void;
export declare const uploadHeroModelSafe: multer.Multer;
//# sourceMappingURL=upload.middleware.d.ts.map