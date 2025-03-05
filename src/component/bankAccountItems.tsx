import { useDispatch, useSelector } from "react-redux";
import {
  increaseBalance,
  decreaseBalance,
  toggleEditing,
  saveEditedName,
} from "../features/bankAccountSlices";
import { AppDispatch } from "../action/types";
import { useState } from "react";

const BankAccountItem = ({
  id,
  name,
  balance,
  owner,
  isEditing,
}: {
  id: number;
  name: string;
  balance: number;
  owner: string;
  isEditing: boolean;
}) => {
  const dispatch = useDispatch<AppDispatch>();
  // Local state 
  const [newName, setNewName] = useState(owner)

  // Dispatch gửi action đến store -> cập nhật state
  const handleIncrease = () => {
    // Khi gọi hàm này, Action sinh ra '{type: 'increaseBalance', payload: { id, amount: 100 }}
    dispatch(increaseBalance({ id, amount: 100 })); // action có type {id, amount} -> Cần truyền vào 2 giá trị
  };

  const handleDecrease = () => {
    dispatch(decreaseBalance({ id, amount: 100 }));
  };
  // LƯU Ý: Nếu không có action thì không cần truyền giá trị
  const handleToggleEditing = () => {
    dispatch(toggleEditing({ id }));
  };

  const handleSave = () => {
    dispatch(saveEditedName({ id, newName }));
  };

  return (
    <div className="border border-slate-600 rounded-2xl p-4 my-4 space-y-2">
      <h2 className="text-2xl font-bold">{name}</h2>
      <div className="flex space-x-3 items-center">
        <h3 className="font-bold text-xl">
          Owner:{" "}
          {isEditing ? (
            <>
              <input
                type="text"
                className="w-40 border border-slate-400 px-2 rounded-2xl"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
              />
            </>
          ) : (
            <>{owner}</>
          )}
        </h3>
        {isEditing ? (
          <>
            <button
              className="hover:cursor-pointer hover:opacity-70 bg-gray-400 border border-black px-2 py-1"
              onClick={handleSave}
            >
              Save
            </button>
          </>
        ) : (
          <button
            className="hover:cursor-pointer hover:opacity-70 bg-gray-400 border border-black px-2 py-1"
            onClick={handleToggleEditing}
          >
            Edit
          </button>
        )}
      </div>
      <p>
        Balance:{" "}
        <span className="text-red-800 font-bold">
          ${balance.toLocaleString()}
        </span>
      </p>
      <button
        onClick={handleIncrease}
        className="bg-blue-300/80 px-4 py-2 rounded-2xl mx-2 border border-blue-400 hover:cursor-pointer hover:opacity-70"
      >
        Increase (+100)
      </button>
      <button
        onClick={handleDecrease}
        className="bg-blue-300/80 px-4 py-2 rounded-2xl mx-2 border border-blue-400 hover:cursor-pointer hover:opacity-70"
      >
        Decrease (-100)
      </button>
    </div>
  );
};

export default BankAccountItem;
