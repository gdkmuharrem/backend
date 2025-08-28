import { IHeroService } from './interfaces/IHeroService';
import { HeroInput } from '../validators/hero.validator';
export declare class HeroService implements IHeroService {
    createHero(data: HeroInput): Promise<{
        id: string;
        createdAt: Date;
        isActive: boolean;
        updatedAt: Date;
    }>;
    getAllHeroes(): Promise<{
        id: string;
        createdAt: Date;
        isActive: boolean;
        updatedAt: Date;
    }[]>;
    getHeroById(id: string): Promise<{
        id: string;
        createdAt: Date;
        isActive: boolean;
        updatedAt: Date;
    } | null>;
    updateHero(id: string, data: Partial<HeroInput>): Promise<{
        id: string;
        createdAt: Date;
        isActive: boolean;
        updatedAt: Date;
    }>;
    deleteHero(id: string): Promise<void>;
}
//# sourceMappingURL=hero.service.d.ts.map