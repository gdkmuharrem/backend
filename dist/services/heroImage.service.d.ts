import { IHeroImageService } from './interfaces/IHeroImageService';
import { HeroImage } from '@prisma/client';
export declare class HeroImageService implements IHeroImageService {
    uploadHeroImage(heroId: string, file: Express.Multer.File): Promise<HeroImage>;
    getImagesByHero(heroId: string): Promise<HeroImage[]>;
    getImageById(id: string): Promise<HeroImage | null>;
    deleteImage(id: string): Promise<void>;
}
//# sourceMappingURL=heroImage.service.d.ts.map