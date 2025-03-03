import { combineReducers } from "redux";
import decreaseReducers from "./decreseTest";
import increaseReducers from "./increseTest";

const rootReducer = combineReducers({
  increaseReducers,
  decreaseReducers,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
