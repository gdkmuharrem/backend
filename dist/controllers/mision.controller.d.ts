import { Request, Response } from 'express';
import { IMisionService } from '../services/interfaces/IMisionService';
export declare function createMisionController(misionService: IMisionService): {
    create: (req: Request, res: Response) => Promise<void>;
    getAll: (_req: Request, res: Response) => Promise<void>;
    getById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    update: (req: Request, res: Response) => Promise<void>;
    delete: (req: Request, res: Response) => Promise<void>;
};
//# sourceMappingURL=mision.controller.d.ts.map