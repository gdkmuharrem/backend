import { Hero } from '@prisma/client';
import { HeroInput } from '../../validators/hero.validator';

export interface IHeroService {
  createHero(data: HeroInput): Promise<Hero>;
  getAllHeroes(): Promise<Hero[]>;
  getHeroById(id: string): Promise<Hero | null>;
  updateHero(id: string, data: Partial<HeroInput>): Promise<Hero>;
  deleteHero(id: string): Promise<void>;
}