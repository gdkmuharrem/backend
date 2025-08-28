import { IHeroModelService } from './interfaces/IHeroModelService';
import * as repo from '../repositories/heroModel.repository';
import { Hero3DModel } from '@prisma/client';
import path from 'path';

export class HeroModelService implements IHeroModelService {
  async uploadHeroModel(heroId: string, file: Express.Multer.File): Promise<Hero3DModel> {
    const relativePath = path.relative(process.cwd(), file.path).replace(/\\/g, '/');
    return repo.createHeroModel({
      heroId,
      originalName: file.originalname,
      storedName: file.filename,
      filePath: relativePath,
    });
  }

  getModelsByHero(heroId: string): Promise<Hero3DModel[]> {
    return repo.getModelsByHero(heroId);
  }

  getModelById(id: string): Promise<Hero3DModel | null> {
    return repo.getModelById(id);
  }

  deleteModel(id: string): Promise<void> {
    return repo.deleteModel(id);
  }
}