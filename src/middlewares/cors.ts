import { Request, Response, NextFunction } from 'express';

export function corsHandler(req: Request, res: Response, next: NextFunction) {
  // handle cors
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, PUT, DELETE, OPTIONS'
  );
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, Accept, Content-Type, Authorization'
  );

  // handle preflight, always return 200
  if (req.method === 'OPTIONS') return res.status(200).end();
  return next();
}
