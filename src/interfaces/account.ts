export interface Account {
  type: number;
  saldo: number;
  number: string;
}

export interface AccountType {
  id: number;
  codigo: string;
  moneda: string;
  nombre: string;
}

export interface AccountResponseData {
  tipos: AccountType[];
  cuentas: Account[];
}
