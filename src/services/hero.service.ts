import { IHeroService } from './interfaces/IHeroService';
import * as heroRepo from '../repositories/hero.repository';
import { HeroInput } from '../validators/hero.validator';

export class HeroService implements IHeroService {
  createHero(data: HeroInput) {
    return heroRepo.createHero(data);
  }

  getAllHeroes() {
    return heroRepo.getAllHeroes();
  }

  getHeroById(id: string) {
    return heroRepo.getHeroById(id);
  }

  updateHero(id: string, data: Partial<HeroInput>) {
    return heroRepo.updateHero(id, data);
  }

  deleteHero(id: string) {
    return heroRepo.deleteHero(id);
  }
}