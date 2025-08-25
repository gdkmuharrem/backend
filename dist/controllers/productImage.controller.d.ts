import { Request, Response } from 'express';
import { IProductImageService } from '../services/interfaces/IProductImageService';
export declare function createProductImageController(productImageService: IProductImageService): {
    upload: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    getByProduct: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    delete: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
};
//# sourceMappingURL=productImage.controller.d.ts.map