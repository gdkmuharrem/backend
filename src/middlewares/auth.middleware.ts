import { Request, Response, NextFunction } from 'express';
import { IAuthService } from '../services/interfaces/IAuthService';

export function adminAuthMiddleware(authService: IAuthService) {
  return (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies['token'];

    if (!token) {
      return res.status(401).json({ message: 'Authentication token missing' });
    }

    const decoded = authService.verifyToken(token);

    if (!decoded) {
      return res.status(401).json({ message: 'Invalid or expired token' });
    }

    (req as any).adminId = decoded.adminId;
    next();
  };
}
