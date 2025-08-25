import { Mision } from '@prisma/client';
import { MisionInput } from '../../validators/mision.validator';
export interface IMisionService {
    createMision(data: MisionInput): Promise<Mision>;
    getAllMisions(): Promise<Mision[]>;
    getMisionById(id: string): Promise<Mision | null>;
    updateMision(id: string, data: Partial<MisionInput>): Promise<Mision>;
    deleteMision(id: string): Promise<void>;
}
//# sourceMappingURL=IMisionService.d.ts.map