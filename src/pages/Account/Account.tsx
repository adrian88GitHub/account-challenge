import * as React from "react";
import { AccountItem, IAccountItem } from "../../components/AccountItem";
import { useAccount } from "./useAccount";

export const AccountPage = () => {
  const { filterAccounts, loadingData, error } = useAccount();
  return (
    <React.Fragment>
      {loadingData && <p>...loading</p>}
      {error && <p>ups, ocurrió un error</p>}
      <ul>
        {!!filterAccounts.length &&
          filterAccounts.map((mappedAccount: IAccountItem) => (
            <AccountItem
              key={mappedAccount.accountNumber}
              accountItem={mappedAccount}
            />
          ))}
      </ul>
    </React.Fragment>
  );
};
