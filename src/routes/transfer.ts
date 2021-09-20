import express from 'express';
import { authChecker } from '../middlewares';
import { generateUUID4 } from '../utils/generator';
import { ITransferRequest } from './types';

const transferRouter = express.Router();

// PHASE 1: simply validate and return hardcoded resp
transferRouter.post('/', authChecker, (req, res) => {
  const { recipientAccountNo, amount, date, description } =
    req.body as ITransferRequest;

  // TODO: use a validator package to validate body schema
  if (!recipientAccountNo || !amount || !date || !description) {
    res
      .status(400)
      .send({
        status: 'failed',
        description: 'Invalid request',
      })
      .end();
  }

  res
    .send({
      status: 'success',
      data: {
        id: generateUUID4(),
        ...req.body,
      },
    })
    .end();
});

export default transferRouter;
