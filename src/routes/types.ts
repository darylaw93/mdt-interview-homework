export interface IAuthRequest {
  username: string;
  password: string;
}

export interface ITransferRequest {
  recipientAccountNo: string;
  amount: number;
  description?: string;
  date: string;
}
