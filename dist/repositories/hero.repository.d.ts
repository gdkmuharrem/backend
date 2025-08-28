import { Hero } from '@prisma/client';
import { HeroInput } from '../validators/hero.validator';
export declare function createHero(data: HeroInput): Promise<Hero>;
export declare function getAllHeroes(): Promise<Hero[]>;
export declare function getHeroById(id: string): Promise<Hero | null>;
export declare function updateHero(id: string, data: Partial<HeroInput>): Promise<Hero>;
export declare function deleteHero(id: string): Promise<void>;
//# sourceMappingURL=hero.repository.d.ts.map