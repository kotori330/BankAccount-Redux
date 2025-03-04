import { combineReducers } from "redux";
import decreaseReducers from "./decreseTest";
import increaseReducers from "./increseTest";
import { createReducer } from "@reduxjs/toolkit";
import { BankState } from "../type/types";
import { increase, decrease } from "../action/actions";

const initialState: BankState = {
  balance: 500000
}

const rootReducer = createReducer(initialState, (builder) => {
  builder.addCase(increase, (state, action) => {
    state.balance += action.payload
  })
  .addCase(decrease, (state, action) => {
    state.balance -= action.payload

  })
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
