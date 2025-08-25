import { AboutImage } from '@prisma/client';
export interface IAboutImageService {
    uploadAboutImage(aboutId: string, file: Express.Multer.File): Promise<AboutImage>;
    getImagesByAbout(aboutId: string): Promise<AboutImage[]>;
    getImageById(id: string): Promise<AboutImage | null>;
    deleteImage(id: string): Promise<void>;
}
//# sourceMappingURL=IAboutImageService.d.ts.map