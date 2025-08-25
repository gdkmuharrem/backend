import { MisionImage } from '@prisma/client';
export declare function createMisionImage(data: {
    misionId: string;
    originalName: string;
    storedName: string;
    filePath: string;
}): Promise<MisionImage>;
export declare function getImagesByMision(misionId: string): Promise<MisionImage[]>;
export declare function getImageById(id: string): Promise<MisionImage | null>;
export declare function deleteImage(id: string): Promise<void>;
//# sourceMappingURL=misionImage.repository.d.ts.map