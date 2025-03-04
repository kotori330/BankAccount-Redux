
import React, { memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increaseBalance, decreaseBalance } from "./bankAccountSlices";
import { RootState, AppDispatch } from "../store/store";
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
