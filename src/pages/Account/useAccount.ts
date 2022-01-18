import { useState, useEffect } from "react";
import { IAccountItem } from "../../components/AccountItem";
import { useFetchData } from "../../hooks/useFetchData";
import {
  Account,
  AccountResponseData,
  AccountType,
} from "../../interfaces/account";

export const useAccount = () => {
  const { loadingData, data, error } = useFetchData(
    "https://api.npoint.io/e9cb7acc6095dff4004a"
  );

  const [filterAccounts, setFilterAccounts] = useState<IAccountItem[]>([]);

  useEffect(() => {
    (async () => {
      if (data) {
        console.log("data effect: ", data);

        const { tipos: accountTypes, cuentas: accounts } = data;
        const mappedAccounts: IAccountItem[] = accounts.map(
          (account: Account) => {
            const accountType = accountTypes.find(
              (accountType: AccountType) => account.type === accountType.id
            );
            return {
              accountNumber: account.number,
              type: accountType?.nombre! || "",
              currency: accountType?.moneda! || "",
              accountBalance: account.saldo,
            };
          }
        );
        const filterAccounts = mappedAccounts.filter(
          (mappedAccount: IAccountItem) =>
            !!mappedAccount.type && mappedAccount.accountBalance > 0
        );
        setFilterAccounts(filterAccounts);
      }
    })();
  }, [data, error]);
  return { loadingData, filterAccounts, error };
};
