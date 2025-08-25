import { VisionImage } from '@prisma/client';
export interface IVisionImageService {
    uploadVisionImage(visionId: string, file: Express.Multer.File): Promise<VisionImage>;
    getImagesByVision(visionId: string): Promise<VisionImage[]>;
    getImageById(id: string): Promise<VisionImage | null>;
    deleteImage(id: string): Promise<void>;
}
//# sourceMappingURL=IVisionImageService.d.ts.map