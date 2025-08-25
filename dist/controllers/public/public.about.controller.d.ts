import { Request, Response } from 'express';
import { IAboutService } from '../../services/interfaces/IAboutService';
export declare function createPublicAboutController(aboutService: IAboutService): {
    getAll: (_req: Request, res: Response) => Promise<void>;
    getById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
};
//# sourceMappingURL=public.about.controller.d.ts.map