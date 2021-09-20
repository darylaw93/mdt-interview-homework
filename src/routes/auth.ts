import express, { Request, Response } from 'express';
import { generateJWT } from '../utils/auth';
import { IAuthRequest } from './types';

const auth = express.Router();

// phase 1: no actual auth logic yet
auth.post('/login', (req: Request, res: Response) => {
  const { username, password } = req.body as IAuthRequest;

  if (!username || !password) {
    res
      .status(400)
      .send({ status: 'failed', description: 'Invalid request' })
      .end();
  }

  if (username !== 'ocbc' || password !== '123456') {
    res
      .status(403)
      .send({ status: 'failed', description: 'Invalid username or password' })
      .end();
  }

  const token = generateJWT({ username });
  res.status(200).send({ status: 'success', token }).end();
});

export default auth;
