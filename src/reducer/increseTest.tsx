import { PayloadAction } from "@reduxjs/toolkit";
import { BankState } from "../type/types";


export default function increaseReducers(
  state: BankState,
  action: PayloadAction<number>
) {
  state.balance += action.payload;
}
