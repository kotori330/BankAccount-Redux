
import { configureStore } from "@reduxjs/toolkit";
import bankAccountsSlice from "../features/bankAccountSlices";

const store = configureStore({
  reducer: {
    bankAccounts: bankAccountsSlice.reducer,
  },
});

// Define TypeScript types for the store
export type RootState = ReturnType<typeof store.getState>; // Type for the entire state
export type AppDispatch = typeof store.dispatch; // Type for dispatch function

export default store;
