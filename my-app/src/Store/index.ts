import { combineReducers, createStore } from "redux";
import { CountReducer } from "./Counter/Reducer";

const RootReducer = combineReducers({
  count: CountReducer,
})

export type RootState = ReturnType<typeof RootReducer>

const store = createStore(RootReducer);
export default store;
