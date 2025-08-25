import { Vision } from '@prisma/client';
import { VisionInput } from '../../validators/vision.validator';

export interface IVisionService {
  createVision(data: VisionInput): Promise<Vision>;
  getAllVisions(): Promise<Vision[]>;
  getVisionById(id: string): Promise<Vision | null>;
  updateVision(id: string, data: Partial<VisionInput>): Promise<Vision>;
  deleteVision(id: string): Promise<void>;
}
