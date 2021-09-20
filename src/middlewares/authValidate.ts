import { Request, Response, NextFunction } from 'express';
import { verifyJWT } from '../utils/auth';

/**
 * a middleware to check if user is authorized
 * while sending a request to a protected route
 */

export function authChecker(req: Request, res: Response, next: NextFunction) {
  const authToken = req.headers.authorization;

  // phase 1: no actual auth logic yet
  if (!authToken) {
    return res
      .status(401)
      .send({ status: 'failed', description: 'Request not authorized' });
  }

  try {
    // TODO: extract the jwt payload for user data
    verifyJWT(authToken);
  } catch (e) {
    return res
      .status(400)
      .send({ status: 'failed', description: 'Invalid token' });
  }

  return next();
}

export default authChecker;
