import { Vision } from '@prisma/client';
import { VisionInput } from '../validators/vision.validator';
export declare function createVision(data: VisionInput): Promise<Vision>;
export declare function getAllVisions(): Promise<Vision[]>;
export declare function getVisionById(id: string): Promise<Vision | null>;
export declare function updateVision(id: string, data: Partial<VisionInput>): Promise<Vision>;
export declare function deleteVision(id: string): Promise<void>;
//# sourceMappingURL=vision.repository.d.ts.map