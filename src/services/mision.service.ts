import { IMisionService } from './interfaces/IMisionService';
import * as misionRepo from '../repositories/mision.repository';
import { MisionInput } from '../validators/mision.validator';

export class MisionService implements IMisionService {
  createMision(data: MisionInput) {
    return misionRepo.createMision(data);
  }

  getAllMisions() {
    return misionRepo.getAllMisions();
  }

  getMisionById(id: string) {
    return misionRepo.getMisionById(id);
  }

  updateMision(id: string, data: Partial<MisionInput>) {
    return misionRepo.updateMision(id, data);
  }

  deleteMision(id: string) {
    return misionRepo.deleteMision(id);
  }
}
