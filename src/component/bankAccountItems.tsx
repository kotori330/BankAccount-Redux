import {
  increaseBalance,
  decreaseBalance,
  deleteAccount,
  saveEditedName,
} from "../features/bankAccountSlices";
import { AppDispatch } from "../action/types";
import { useDispatch } from "react-redux";
import { useState } from "react";

const BankAccountItem = ({
  id,
  name,
  balance,
  owner,
}: {
  id: string;
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
    // Khi gọi hàm này, Action sau được sinh ra: '{type: 'increaseBalance', payload: { id, amount: 100 }}
    dispatch(increaseBalance({ id, amount: 100 })); // action này đã định nghĩa type có 2 thuộc tính: {id, amount} -> Cần truyền vào 2 giá trị
  };

  const handleDecrease = () => {
    dispatch(decreaseBalance({ id, amount: 100 }));
  };
  const handleSave = () => {
    dispatch(saveEditedName({ id, newName }));
  };

  const handleDelete = () => {
    dispatch(deleteAccount({ id }));
  };
  // LƯU Ý: Nếu không có action thì không cần truyền giá trị

  return (
    <div className="border border-slate-600 rounded-2xl p-4 space-y-2 relative">
      <span
        className="absolute right-4 top-2 text-3xl hover:cursor-pointer hover:bg-slate-400/20 rounded-full px-2.5 pb-1"
        onClick={handleDelete}
      >
        &times;
      </span>
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
              className="hover:cursor-pointer hover:opacity-70 bg-gray-400/20 border border-black px-2 py-1"
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
            className="hover:cursor-pointer hover:opacity-70 bg-gray-400/20 border border-black px-2 py-1"
            onClick={handleToggleEditing}
          >
            Edit
          </button>
        )}
      </div>
      <p>
        Balance:{" "}
        <span className="text-red-800 font-bold">
          ${balance}
        </span>
      </p>
      <button
        onClick={handleIncrease}
        className="bg-blue-300/80 px-4 py-2 rounded-2xl mx-2 border border-blue-400/40 hover:cursor-pointer hover:opacity-70"
      >
        Increase (+100)
      </button>
      <button
        onClick={handleDecrease}
        className="bg-blue-300/80 px-4 py-2 rounded-2xl mx-2 border border-blue-400/40 hover:cursor-pointer hover:opacity-70"
      >
        Decrease (-100)
      </button>
    </div>
  );
};

export default BankAccountItem;
