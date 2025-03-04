import { useDispatch } from "react-redux";
import {
  increaseBalance,
  decreaseBalance,
} from "../features/bankAccountSlices";
import { AppDispatch } from "../action/types";

const BankAccountItem = ({
  id,
  name,
  balance,
}: {
  id: number;
  name: string;
  balance: number;
}) => {
  const dispatch = useDispatch<AppDispatch>();

  // Dispatch gửi action đến store -> cập nhật state
  const handleIncrease = () => {
    // Khi gọi hàm này, Action sinh ra '{type: 'increaseBalance', payload: { id, amount: 100 }}
    dispatch(increaseBalance({ id, amount: 100 })); // action có type {id, amount} -> Cần truyền vào 2 giá trị 
  };

  const handleDecrease = () => {
    dispatch(decreaseBalance({ id, amount: 100 })); 
  };
  // LƯU Ý: Nếu không có action thì không cần truyền giá trị -> VD như reducer đóng mở modal

  return (
    <div style={{ margin: "10px", padding: "10px", border: "1px solid #ccc" }}>
      <h3>{name}</h3>
      <p>Balance: ${balance.toLocaleString()}</p>
      <button onClick={handleIncrease}>Increase (+100)</button>
      <button onClick={handleDecrease}>Decrease (-100)</button>
    </div>
  );
};

export default BankAccountItem;
