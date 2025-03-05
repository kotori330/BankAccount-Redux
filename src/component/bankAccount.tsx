import { useSelector } from "react-redux";
import { RootState } from "../action/types";
import BankAccountItem from "./bankAccountItems";
import AddBankAccountModal from "./Modal/addBankAccountModal";
import { useState } from "react";

const BankAccounts = () => {
  // Truy cập vào global state, lấy dữ liệu accounts từ initialState của slice bankAccounts
  // Khi biến accounts này thay đổi, component re-render
  const accounts = useSelector(
    (state: RootState) => state.bankAccounts.accounts
  );

  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen((prev) => !prev);
  };
  return (
    <>
      <div className="grid grid-cols-2 gap-4 mt-4">
        {accounts.map((account) => (
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
