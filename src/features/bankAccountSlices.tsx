import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BankAccountsState } from "../action/types";

const initialState: BankAccountsState = {
  accounts: [
    { id: 1, name: "Account 1 - Savings", balance: 1000 },
    { id: 2, name: "Account 2 - Checking", balance: 500 },
    { id: 3, name: "Account 3 - Investment", balance: 2000 },
    { id: 4, name: "Account 4 - Emergency", balance: 300 },
    { id: 5, name: "Account 5 - Travel", balance: 750 },
  ],
};

const bankAccountsSlice = createSlice({
  name: "bankAccounts",
  initialState,
  reducers: {
    increaseBalance: (
      state,
      action: PayloadAction<{ id: number; amount: number }>
    ) => {
      const { id, amount } = action.payload;
      const account = state.accounts.find((acc) => acc.id === id);
      account!.balance += amount;
    },
    decreaseBalance: (
      state,
      action: PayloadAction<{ id: number; amount: number }>
    ) => {
      const { id, amount } = action.payload;
      const account = state.accounts.find((acc) => acc.id === id);
      account!.balance -= amount;
    },
  },
});

// Export actions to be used in components
export const { increaseBalance, decreaseBalance } = bankAccountsSlice.actions;

// Export the reducer to be used in store
export default bankAccountsSlice;
