import { Request, Response } from 'express';
import { IHeroModelService } from '../../services/interfaces/IHeroModelService';
export declare function createPublicHeroModelController(heroModelService: IHeroModelService): {
    getByHero: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    getById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
};
//# sourceMappingURL=public.heroModel.controller.d.ts.map