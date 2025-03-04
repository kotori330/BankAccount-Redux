// Define the shape of a single bank account
export interface BankAccount {
  id: number;
  name: string;
  balance: number;
}

// Define the state structure
export interface BankAccountsState {
  accounts: BankAccount[];
}