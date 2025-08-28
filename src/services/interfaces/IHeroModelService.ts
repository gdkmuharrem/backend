import { Hero3DModel } from '@prisma/client';

export interface IHeroModelService {
  uploadHeroModel(heroId: string, file: Express.Multer.File): Promise<Hero3DModel>;
  getModelsByHero(heroId: string): Promise<Hero3DModel[]>;
  getModelById(id: string): Promise<Hero3DModel | null>;
  deleteModel(id: string): Promise<void>;
}