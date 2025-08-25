import { Request, Response } from 'express';
import { IMisionImageService } from '../../services/interfaces/IMisionImageService';
export declare function createPublicMisionImageController(misionImageService: IMisionImageService): {
    getByMision: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    getById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
};
//# sourceMappingURL=public.misionImage.controller.d.ts.map