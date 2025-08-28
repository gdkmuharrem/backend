import { Request, Response } from 'express';
import { IHeroImageService } from '../services/interfaces/IHeroImageService';
export declare function createHeroImageController(heroImageService: IHeroImageService): {
    upload: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    getByHero: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    delete: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
};
//# sourceMappingURL=heroImage.controller.d.ts.map