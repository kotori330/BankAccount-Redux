import { useSelector } from "react-redux";
import { RootState } from "../action/types";
import BankAccountItem from "./bankAccountItems";

const BankAccounts = () => {
  // Truy cập vào global state, lấy dữ liệu accounts từ initialState của slice bankAccounts
  // Khi biến accounts này thay đổi, component re-render
  const accounts = useSelector(
    (state: RootState) => state.bankAccounts.accounts 
  );
  return (
    <div>
      {accounts.map((account) => (
        <BankAccountItem
          key={account.id}
          id={account.id}
          name={account.name}
          balance={account.balance}
          owner={account.owner}
          isEditing={account.isEditing}
        />
      ))}
    </div>
  );
};

export default BankAccounts;
