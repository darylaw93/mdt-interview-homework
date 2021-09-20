import jwt from 'jsonwebtoken';
import config from '../config';

export function generateJWT<T extends Record<string, unknown>>(payload: T) {
  const options: jwt.SignOptions = {
    expiresIn: '3h',
  };
  const jwtToken = jwt.sign(payload, config.jwtSecret, options);
  return jwtToken;
}

export function verifyJWT(token: string) {
  return jwt.verify(token, config.jwtSecret);
}

// TODO: hash password
