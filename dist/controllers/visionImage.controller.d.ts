import { Request, Response } from 'express';
import { IVisionImageService } from '../services/interfaces/IVisionImageService';
export declare function createVisionImageController(visionImageService: IVisionImageService): {
    upload: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    getByVision: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    delete: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
};
//# sourceMappingURL=visionImage.controller.d.ts.map