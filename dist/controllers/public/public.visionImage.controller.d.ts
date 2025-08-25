import { Request, Response } from 'express';
import { IVisionImageService } from '../../services/interfaces/IVisionImageService';
export declare function createPublicVisionImageController(visionImageService: IVisionImageService): {
    getByVision: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    getById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
};
//# sourceMappingURL=public.visionImage.controller.d.ts.map