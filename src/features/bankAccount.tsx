

import { useSelector } from "react-redux";
import { RootState } from "../action/types";
import BankAccountItem from "./bankAccountItems";




const BankAccounts = () => {
  const accounts = useSelector(
    (state: RootState) => state.bankAccounts.accounts
  );
  return (
    <div>
      <h1>Bank Accounts</h1>
      {accounts.map((account) => (
        <BankAccountItem
          key={account.id}
          id={account.id}
          name={account.name}
          balance={account.balance}
        />
      ))}
    </div>
  );
};

export default BankAccounts;
