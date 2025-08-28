import { Request, Response } from 'express';
import { IHeroModelService } from '../services/interfaces/IHeroModelService';
export declare function createHeroModelController(heroModelService: IHeroModelService): {
    upload: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    getByHero: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    delete: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
};
//# sourceMappingURL=heroModel.controller.d.ts.map