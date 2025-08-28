import { IHeroImageService } from './interfaces/IHeroImageService';
import * as repo from '../repositories/heroImage.repository';
import { HeroImage } from '@prisma/client';
import path from 'path';

export class HeroImageService implements IHeroImageService {
  async uploadHeroImage(heroId: string, file: Express.Multer.File): Promise<HeroImage> {
    const relativePath = path.relative(process.cwd(), file.path).replace(/\\/g, '/');
    return repo.createHeroImage({
      heroId,
      originalName: file.originalname,
      storedName: file.filename,
      filePath: relativePath,
    });
  }

  getImagesByHero(heroId: string): Promise<HeroImage[]> {
    return repo.getImagesByHero(heroId);
  }

  getImageById(id: string): Promise<HeroImage | null> {
    return repo.getImageById(id);
  }

  deleteImage(id: string): Promise<void> {
    return repo.deleteImage(id);
  }
}