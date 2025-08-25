import { Request, Response } from 'express';
import { IAboutService } from '../services/interfaces/IAboutService';
export declare function createAboutController(aboutService: IAboutService): {
    create: (req: Request, res: Response) => Promise<void>;
    getAll: (_req: Request, res: Response) => Promise<void>;
    getById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    update: (req: Request, res: Response) => Promise<void>;
    delete: (req: Request, res: Response) => Promise<void>;
};
//# sourceMappingURL=about.controller.d.ts.map