import { IVisionImageService } from './interfaces/IVisionImageService';
import { VisionImage } from '@prisma/client';
export declare class VisionImageService implements IVisionImageService {
    uploadVisionImage(visionId: string, file: Express.Multer.File): Promise<VisionImage>;
    getImagesByVision(visionId: string): Promise<VisionImage[]>;
    getImageById(id: string): Promise<VisionImage | null>;
    deleteImage(id: string): Promise<void>;
}
//# sourceMappingURL=visionImage.service.d.ts.map