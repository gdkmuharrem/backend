import { Request, Response } from 'express';
import { IAuthService } from '../services/interfaces/IAuthService';
export declare function createAuthController(authService: IAuthService): {
    login: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    logout: (req: Request, res: Response) => Response<any, Record<string, any>>;
    getMe: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    register: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
};
//# sourceMappingURL=auth.controller.d.ts.map