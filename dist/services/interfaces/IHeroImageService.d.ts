import { HeroImage } from '@prisma/client';
export interface IHeroImageService {
    uploadHeroImage(heroId: string, file: Express.Multer.File): Promise<HeroImage>;
    getImagesByHero(heroId: string): Promise<HeroImage[]>;
    getImageById(id: string): Promise<HeroImage | null>;
    deleteImage(id: string): Promise<void>;
}
//# sourceMappingURL=IHeroImageService.d.ts.map