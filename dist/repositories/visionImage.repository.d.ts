import { VisionImage } from '@prisma/client';
export declare function createVisionImage(data: {
    visionId: string;
    originalName: string;
    storedName: string;
    filePath: string;
}): Promise<VisionImage>;
export declare function getImagesByVision(visionId: string): Promise<VisionImage[]>;
export declare function getImageById(id: string): Promise<VisionImage | null>;
export declare function deleteImage(id: string): Promise<void>;
//# sourceMappingURL=visionImage.repository.d.ts.map