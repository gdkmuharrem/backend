import { Request, Response } from 'express';
import { ICategoryService } from '../services/interfaces/ICategoryService';
export declare function createCategoryController(categoryService: ICategoryService): {
    create: (req: Request, res: Response) => Promise<void>;
    getAll: (_req: Request, res: Response) => Promise<void>;
    getById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    update: (req: Request, res: Response) => Promise<void>;
    delete: (req: Request, res: Response) => Promise<void>;
};
//# sourceMappingURL=category.controller.d.ts.map