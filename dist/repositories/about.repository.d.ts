import { About } from '@prisma/client';
import { AboutInput } from '../validators/about.validator';
export declare function createAbout(data: AboutInput): Promise<About>;
export declare function getAllAbouts(): Promise<About[]>;
export declare function getAboutById(id: string): Promise<About | null>;
export declare function updateAbout(id: string, data: Partial<AboutInput>): Promise<About>;
export declare function deleteAbout(id: string): Promise<void>;
//# sourceMappingURL=about.repository.d.ts.map