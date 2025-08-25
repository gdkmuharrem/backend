import { IMisionService } from './interfaces/IMisionService';
import { MisionInput } from '../validators/mision.validator';
export declare class MisionService implements IMisionService {
    createMision(data: MisionInput): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title_tr: string;
        title_en: string;
        contents: import("@prisma/client/runtime/library").JsonValue;
    }>;
    getAllMisions(): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title_tr: string;
        title_en: string;
        contents: import("@prisma/client/runtime/library").JsonValue;
    }[]>;
    getMisionById(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title_tr: string;
        title_en: string;
        contents: import("@prisma/client/runtime/library").JsonValue;
    } | null>;
    updateMision(id: string, data: Partial<MisionInput>): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title_tr: string;
        title_en: string;
        contents: import("@prisma/client/runtime/library").JsonValue;
    }>;
    deleteMision(id: string): Promise<void>;
}
//# sourceMappingURL=mision.service.d.ts.map