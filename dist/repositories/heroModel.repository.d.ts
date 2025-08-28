import { Hero3DModel } from '@prisma/client';
export declare function createHeroModel(data: {
    heroId: string;
    originalName: string;
    storedName: string;
    filePath: string;
}): Promise<Hero3DModel>;
export declare function getModelsByHero(heroId: string): Promise<Hero3DModel[]>;
export declare function getModelById(id: string): Promise<Hero3DModel | null>;
export declare function deleteModel(id: string): Promise<void>;
//# sourceMappingURL=heroModel.repository.d.ts.map