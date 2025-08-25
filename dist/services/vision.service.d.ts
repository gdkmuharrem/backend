import { IVisionService } from './interfaces/IVisionService';
import { VisionInput } from '../validators/vision.validator';
export declare class VisionService implements IVisionService {
    createVision(data: VisionInput): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title_tr: string;
        title_en: string;
        contents: import("@prisma/client/runtime/library").JsonValue;
    }>;
    getAllVisions(): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title_tr: string;
        title_en: string;
        contents: import("@prisma/client/runtime/library").JsonValue;
    }[]>;
    getVisionById(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title_tr: string;
        title_en: string;
        contents: import("@prisma/client/runtime/library").JsonValue;
    } | null>;
    updateVision(id: string, data: Partial<VisionInput>): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title_tr: string;
        title_en: string;
        contents: import("@prisma/client/runtime/library").JsonValue;
    }>;
    deleteVision(id: string): Promise<void>;
}
//# sourceMappingURL=vision.service.d.ts.map