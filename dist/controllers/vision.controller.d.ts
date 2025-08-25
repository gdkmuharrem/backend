import { Request, Response } from 'express';
import { IVisionService } from '../services/interfaces/IVisionService';
export declare function createVisionController(visionService: IVisionService): {
    create: (req: Request, res: Response) => Promise<void>;
    getAll: (_req: Request, res: Response) => Promise<void>;
    getById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    update: (req: Request, res: Response) => Promise<void>;
    delete: (req: Request, res: Response) => Promise<void>;
};
//# sourceMappingURL=vision.controller.d.ts.map