import { Request, Response } from 'express';
import { IMisionService } from '../../services/interfaces/IMisionService';
export declare function createPublicMisionController(misionService: IMisionService): {
    getAll: (_req: Request, res: Response) => Promise<void>;
    getById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
};
//# sourceMappingURL=public.mision.controller.d.ts.map