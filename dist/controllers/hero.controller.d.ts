import { Request, Response } from 'express';
import { IHeroService } from '../services/interfaces/IHeroService';
export declare function createHeroController(heroService: IHeroService): {
    create: (req: Request, res: Response) => Promise<void>;
    getAll: (_req: Request, res: Response) => Promise<void>;
    getById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    update: (req: Request, res: Response) => Promise<void>;
    delete: (req: Request, res: Response) => Promise<void>;
};
//# sourceMappingURL=hero.controller.d.ts.map