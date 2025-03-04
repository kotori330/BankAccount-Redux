
import { configureStore } from "@reduxjs/toolkit";
import bankAccountsSlice from "../features/bankAccountSlices";

const store = configureStore({
  reducer: {
    bankAccounts: bankAccountsSlice.reducer,
  },
});



export default store;
