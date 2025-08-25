import { IAboutImageService } from './interfaces/IAboutImageService';
import { AboutImage } from '@prisma/client';
export declare class AboutImageService implements IAboutImageService {
    uploadAboutImage(aboutId: string, file: Express.Multer.File): Promise<AboutImage>;
    getImagesByAbout(aboutId: string): Promise<AboutImage[]>;
    getImageById(id: string): Promise<AboutImage | null>;
    deleteImage(id: string): Promise<void>;
}
//# sourceMappingURL=aboutImage.service.d.ts.map