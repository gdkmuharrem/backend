import { IAboutService } from './interfaces/IAboutService';
import { AboutInput } from '../validators/about.validator';
export declare class AboutService implements IAboutService {
    createAbout(data: AboutInput): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title_tr: string;
        title_en: string;
        contents: import("@prisma/client/runtime/library").JsonValue;
    }>;
    getAllAbouts(): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title_tr: string;
        title_en: string;
        contents: import("@prisma/client/runtime/library").JsonValue;
    }[]>;
    getAboutById(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title_tr: string;
        title_en: string;
        contents: import("@prisma/client/runtime/library").JsonValue;
    } | null>;
    updateAbout(id: string, data: Partial<AboutInput>): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title_tr: string;
        title_en: string;
        contents: import("@prisma/client/runtime/library").JsonValue;
    }>;
    deleteAbout(id: string): Promise<void>;
}
//# sourceMappingURL=about.service.d.ts.map