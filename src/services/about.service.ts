import { IAboutService } from './interfaces/IAboutService';
import * as aboutRepo from '../repositories/about.repository';
import { AboutInput } from '../validators/about.validator';

export class AboutService implements IAboutService {
  createAbout(data: AboutInput) {
    return aboutRepo.createAbout(data);
  }

  getAllAbouts() {
    return aboutRepo.getAllAbouts();
  }

  getAboutById(id: string) {
    return aboutRepo.getAboutById(id);
  }

  updateAbout(id: string, data: Partial<AboutInput>) {
    return aboutRepo.updateAbout(id, data);
  }

  deleteAbout(id: string) {
    return aboutRepo.deleteAbout(id);
  }
}
