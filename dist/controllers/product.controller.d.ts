import { Request, Response } from 'express';
import { IProductService } from '../services/interfaces/IProductService';
export declare function createProductController(productService: IProductService): {
    create: (req: Request, res: Response) => Promise<void>;
    getAll: (_req: Request, res: Response) => Promise<void>;
    getById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    update: (req: Request, res: Response) => Promise<void>;
    delete: (req: Request, res: Response) => Promise<void>;
    getByCategory: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    search: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    paginate: (req: Request, res: Response) => Promise<void>;
    bulkDelete: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
};
//# sourceMappingURL=product.controller.d.ts.map