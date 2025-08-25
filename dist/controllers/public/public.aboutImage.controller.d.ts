import { Request, Response } from 'express';
import { IAboutImageService } from '../../services/interfaces/IAboutImageService';
export declare function createPublicAboutImageController(aboutImageService: IAboutImageService): {
    getByAbout: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    getById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
};
//# sourceMappingURL=public.aboutImage.controller.d.ts.map