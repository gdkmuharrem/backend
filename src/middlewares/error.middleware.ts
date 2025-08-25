import { Request, Response, NextFunction } from 'express';

export function errorHandler(err: any, req: Request, res: Response, next: NextFunction) {
  const status = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  console.error(err);

  res.status(status).json({ message });
}
