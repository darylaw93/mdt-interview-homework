import express, { Request, Response } from 'express';

import { authChecker } from '../middlewares';

import transactionJson from '../mock/account/transactions.json';
import balanceJson from '../mock/account/balance.json';
import payeesJson from '../mock/account/payees.json';

const account = express.Router();

account.get('/balances', authChecker, (req: Request, res: Response) => {
  res.status(200).send(balanceJson);
});

account.get('/transactions', authChecker, (req: Request, res: Response) =>
  res.status(200).send(transactionJson)
);

account.get('/payees', authChecker, (req: Request, res: Response) =>
  res.status(200).send(payeesJson)
);

export default account;
