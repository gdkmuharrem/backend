import { AboutImage } from '@prisma/client';
export declare function createAboutImage(data: {
    aboutId: string;
    originalName: string;
    storedName: string;
    filePath: string;
}): Promise<AboutImage>;
export declare function getImagesByAbout(aboutId: string): Promise<AboutImage[]>;
export declare function getImageById(id: string): Promise<AboutImage | null>;
export declare function deleteImage(id: string): Promise<void>;
//# sourceMappingURL=aboutImage.repository.d.ts.map