import React, { memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increaseBalance, decreaseBalance } from "./bankAccountSlices";
import { RootState, AppDispatch } from "../store/store";

const BankAccountItem: React.FC<{
  id: number;
  name: string;
  balance: number;
}> = memo(({ id, name, balance }) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleIncrease = () => {
    dispatch(increaseBalance({ id, amount: 100 })); 
  };

  const handleDecrease = () => {
    dispatch(decreaseBalance({ id, amount: 100 })); 
  };

  return (
    <div style={{ margin: "10px", padding: "10px", border: "1px solid #ccc" }}>
      <h3>{name}</h3>
      <p>Balance: ${balance.toLocaleString()}</p>
      <button onClick={handleIncrease}>Increase (+100)</button>
      <button onClick={handleDecrease}>Decrease (-100)</button>
    </div>
  );
});

export default BankAccountItem