import { Request, Response } from 'express';
import { IAboutImageService } from '../services/interfaces/IAboutImageService';
export declare function createAboutImageController(aboutImageService: IAboutImageService): {
    upload: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    getByAbout: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    delete: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
};
//# sourceMappingURL=aboutImage.controller.d.ts.map