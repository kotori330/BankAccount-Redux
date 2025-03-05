import { configureStore } from "@reduxjs/toolkit";
import bankAccountsSlice from "../features/bankAccountSlices";

const store = configureStore({
  reducer: {
    bankAccounts: bankAccountsSlice.reducer, // Quản lý 1 global state {bankAccounts: value} với value chính là initialState
  },
});

export default store;
