import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ActionType, BankAccountsState } from "../action/types";

const initialState: BankAccountsState = {
  accounts: [
    {
      id: 1,
      name: "Account 1 - Savings",
      balance: 1000,
      owner: "Alice",
      isEditing: false,
    },
    {
      id: 2,
      name: "Account 2 - Checking",
      balance: 500,
      owner: "Bob",
      isEditing: false,
    },
    {
      id: 3,
      name: "Account 3 - Investment",
      balance: 2000,
      owner: "Charlie",
      isEditing: false,
    },
    {
      id: 4,
      name: "Account 4 - Emergency",
      balance: 300,
      owner: "David",
      isEditing: false,
    },
    {
      id: 5,
      name: "Account 5 - Travel",
      balance: 750,
      owner: "Eve",
      isEditing: false,
    },
  ],
};

const bankAccountsSlice = createSlice({
  // --------------Default part---------------
  name: "bankAccounts", // Action type -> Tránh xung đột
  initialState,
  reducers: {
    // Object chứa các logical function. Mỗi function đại diện cho 1 case. Tên function sẽ là tên của ACTION CREATOR (tên action)
    increaseBalance: (
      state,
      action: PayloadAction<ActionType> // type PayLoadAction chứa 2 attrs là payload và type. (LƯU Ý: action là optional, nếu khai báo thì khi sử dụng action cần truyền giá trị vào)
    ) => {
      const { id, amount } = action.payload; // Lấy các biến từ ActionType đã khai báo (Nếu không có action thì không cần thực hiện bước này)
      // ------------Logic handle part-------------
      const account = state.accounts.find((acc) => acc.id === id); // state: Nhận vào initialState đã truyền trước đó, nhờ đó truy cập được các element bên trong
      account!.balance += amount;
      // ! là non-null assertion -> Khi chắc chắn rằng account property không phải là null
      // -----Alternative code-----
      // if (account) {
      //   account.balance -= amount;
      // }
    },
    decreaseBalance: (state, action: PayloadAction<ActionType>) => {
      const { id, amount } = action.payload;
      const account = state.accounts.find((acc) => acc.id === id);
      account!.balance -= amount;
    },
    toggleEditing: (state, action: PayloadAction<{ id: number }>) => {
      const { id } = action.payload;
      const account = state.accounts.find((acc) => acc.id === id);
      account!.isEditing = !account!.isEditing;
    },
    saveEditedName: (
      state,
      action: PayloadAction<{ id: number; newName: string }>
    ) => {
      const { id, newName } = action.payload;
      const account = state.accounts.find((acc) => acc.id === id);
      account!.owner = newName;
      account!.isEditing = !account!.isEditing;
    },
  },
});

// Export actions to be used in components
export const {
  increaseBalance,
  decreaseBalance,
  toggleEditing,
  saveEditedName,
} = bankAccountsSlice.actions;

// Export the reducer to be used in store
export default bankAccountsSlice;
