import { HeroImage } from '@prisma/client';
export declare function createHeroImage(data: {
    heroId: string;
    originalName: string;
    storedName: string;
    filePath: string;
}): Promise<HeroImage>;
export declare function getImagesByHero(heroId: string): Promise<HeroImage[]>;
export declare function getImageById(id: string): Promise<HeroImage | null>;
export declare function deleteImage(id: string): Promise<void>;
//# sourceMappingURL=heroImage.repository.d.ts.map