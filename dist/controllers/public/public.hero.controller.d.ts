import { Request, Response } from 'express';
import { IHeroService } from '../../services/interfaces/IHeroService';
export declare function createPublicHeroController(heroService: IHeroService): {
    getAll: (_req: Request, res: Response) => Promise<void>;
    getById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    getActive: (_req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
};
//# sourceMappingURL=public.hero.controller.d.ts.map