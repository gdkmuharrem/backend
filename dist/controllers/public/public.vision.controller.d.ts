import { Request, Response } from 'express';
import { IVisionService } from '../../services/interfaces/IVisionService';
export declare function createPublicVisionController(visionService: IVisionService): {
    getAll: (_req: Request, res: Response) => Promise<void>;
    getById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
};
//# sourceMappingURL=public.vision.controller.d.ts.map