export interface IAccountItem {
  accountNumber: string;
  type: string;
  currency: string;
  accountBalance: number;
}

export const AccountItem = ({ accountItem }: { accountItem: IAccountItem }) => {
  const { accountNumber, type, currency, accountBalance } = accountItem;
  return (
    <li>
      <p>Nro de cuenta: {accountNumber}</p>
      <p>Tipo: {type}</p>
      <p>Moneda: {currency}</p>
      <p>saldo: {accountBalance}</p>
    </li>
  );
};
