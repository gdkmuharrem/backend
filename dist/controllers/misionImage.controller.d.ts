import { Request, Response } from 'express';
import { IMisionImageService } from '../services/interfaces/IMisionImageService';
export declare function createMisionImageController(misionImageService: IMisionImageService): {
    upload: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    getByMision: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    delete: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
};
//# sourceMappingURL=misionImage.controller.d.ts.map