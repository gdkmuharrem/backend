import { Request, Response } from 'express';
import { IProductService } from '../../services/interfaces/IProductService';
export declare function createPublicProductController(productService: IProductService): {
    getAll: (_req: Request, res: Response) => Promise<void>;
    getById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    getByCategory: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    search: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    paginate: (req: Request, res: Response) => Promise<void>;
};
//# sourceMappingURL=public.product.controller.d.ts.map