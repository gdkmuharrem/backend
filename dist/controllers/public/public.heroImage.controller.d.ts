import { Request, Response } from 'express';
import { IHeroImageService } from '../../services/interfaces/IHeroImageService';
export declare function createPublicHeroImageController(heroImageService: IHeroImageService): {
    getByHero: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    getById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
};
//# sourceMappingURL=public.heroImage.controller.d.ts.map