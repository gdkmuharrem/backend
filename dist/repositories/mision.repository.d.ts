import { Mision } from '@prisma/client';
import { MisionInput } from '../validators/mision.validator';
export declare function createMision(data: MisionInput): Promise<Mision>;
export declare function getAllMisions(): Promise<Mision[]>;
export declare function getMisionById(id: string): Promise<Mision | null>;
export declare function updateMision(id: string, data: Partial<MisionInput>): Promise<Mision>;
export declare function deleteMision(id: string): Promise<void>;
//# sourceMappingURL=mision.repository.d.ts.map