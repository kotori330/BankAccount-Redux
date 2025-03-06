import { useSelector } from "react-redux";
import { RootState } from "../action/types";
import BankAccountItem from "./bankAccountItems";
import AddBankAccountModal from "./Modal/addBankAccountModal";
import { useEffect, useState } from "react";
import { createSelector } from "@reduxjs/toolkit";
import SearchBar from "./UI/searchBar";

// Create memoizing selector
const selectNumOfRichBankAccount = createSelector(
  [(state: RootState) => state.bankAccounts.accounts],
  (accounts) => accounts.filter((account) => account.balance > 3000).length
);

const BankAccounts = () => {
  // Truy cập vào global state, lấy dữ liệu accounts từ initialState của slice bankAccounts
  // Khi biến accounts này thay đổi, component re-render
  const accounts = useSelector(
    (state: RootState) => state.bankAccounts.accounts
  );

  const [displayAccounts, setDisplayAccounts] = useState(accounts)

  // Sync local state when accounts updates so that Redux global state will also get updated
  useEffect(() => {
    setDisplayAccounts(accounts);
  }, [accounts])

  // Use memoized selector
  const numOfRichBankAccount = useSelector(selectNumOfRichBankAccount);

  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen((prev) => !prev);
  };
  return (
    <>
      <h1 className="text-xl">
        Number of rich account:{" "}
        <span className="text-3xl text-bold shadow-md">{numOfRichBankAccount}</span>
      </h1>
      <SearchBar accounts={accounts} setDisplayAccounts={setDisplayAccounts}/>
      <div className="grid grid-cols-2 gap-4 mt-4">
        {displayAccounts.map((account) => (
          <BankAccountItem
            key={account.id}
            id={account.id}
            name={account.name}
            balance={account.balance}
            owner={account.owner}
          />
        ))}
        <div className="flex justify-center items-center">
          <button
            className="rounded-full bg-blue-300/80 text-6xl px-4.5 pt-1 pb-2 hover:cursor-pointer hover:opacity-70 select-none"
            onClick={toggleModal}
          >
            &#43;
          </button>
        </div>
      </div>
      {isModalOpen && (
        <>
          <AddBankAccountModal toggleModal={toggleModal} />
        </>
      )}
    </>
  );
};

export default BankAccounts;
