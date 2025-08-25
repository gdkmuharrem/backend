import { Request, Response } from 'express';
import { IProductImageService } from '../../services/interfaces/IProductImageService';
export declare function createPublicProductImageController(productImageService: IProductImageService): {
    getByProduct: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
};
//# sourceMappingURL=public.productImage.controller.d.ts.map