import { useDispatch } from "react-redux";
import {
  increaseBalance,
  decreaseBalance,
  saveEditedName,
} from "../features/bankAccountSlices";
import { AppDispatch } from "../action/types";
import { useState } from "react";

const BankAccountItem = ({
  id,
  name,
  balance,
  owner,
}: {
  id: number;
  name: string;
  balance: number;
  owner: string;
}) => {
  const dispatch = useDispatch<AppDispatch>();
  // Local state. Thực tế là chỉ nên sử dụng state từ Redux khi cần nó ở nhiều nơi. Other than that, local state is recommended
  const [newName, setNewName] = useState(owner);
  const [isEditing, setIsEditing] = useState(false);

  const handleToggleEditing = () => {
    setIsEditing((prev) => !prev);
  };
  // Dispatch gửi action đến store -> cập nhật state
  const handleIncrease = () => {
    // Khi gọi hàm này, Action sinh ra '{type: 'increaseBalance', payload: { id, amount: 100 }}
    dispatch(increaseBalance({ id, amount: 100 })); // action có type {id, amount} -> Cần truyền vào 2 giá trị
  };

  const handleDecrease = () => {
    dispatch(decreaseBalance({ id, amount: 100 }));
  };
  const handleSave = () => {
    dispatch(saveEditedName({ id, newName }));
  };
  // LƯU Ý: Nếu không có action thì không cần truyền giá trị

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
              onClick={() => {
                handleSave();
                handleToggleEditing();
              }}
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
