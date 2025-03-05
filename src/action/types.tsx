import store from "../store/store";

// Define the shape of a single bank account
export interface BankAccount {
  id: number;
  name: string;
  balance: number;
  owner: string;
  isEditing: boolean
}

// Define the state structure
export interface BankAccountsState {
  accounts: BankAccount[];
}

export interface ActionType {
  id: number;
  amount: number;
}

// Define TypeScript types for the store
export type RootState = ReturnType<typeof store.getState>; // Type for the entire state
export type AppDispatch = typeof store.dispatch; // Type for dispatch function
