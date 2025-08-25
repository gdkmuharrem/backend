import { Request, Response } from 'express';
import { ICategoryService } from '../../services/interfaces/ICategoryService';
export declare function createPublicCategoryController(categoryService: ICategoryService): {
    getAll: (_req: Request, res: Response) => Promise<void>;
    getById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
};
//# sourceMappingURL=public.category.controller.d.ts.map