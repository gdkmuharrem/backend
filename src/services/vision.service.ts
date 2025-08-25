import { IVisionService } from './interfaces/IVisionService';
import * as visionRepo from '../repositories/vision.repository';
import { VisionInput } from '../validators/vision.validator';

export class VisionService implements IVisionService {
  createVision(data: VisionInput) {
    return visionRepo.createVision(data);
  }

  getAllVisions() {
    return visionRepo.getAllVisions();
  }

  getVisionById(id: string) {
    return visionRepo.getVisionById(id);
  }

  updateVision(id: string, data: Partial<VisionInput>) {
    return visionRepo.updateVision(id, data);
  }

  deleteVision(id: string) {
    return visionRepo.deleteVision(id);
  }
}
