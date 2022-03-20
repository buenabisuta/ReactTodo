import { Action } from "redux";
import { ActionTypes } from "../ActionTypes";
import { CountActionTypes } from "./Types";

const initialState: number = 0;

const increment = (val: number, add: number) => {
  return val + add;
}

const decrement = (val: number) => {
  if (val <= 0) return val; 
  return val - 1;
}

// Action Typeごとの処理を記載
export const CountReducer = (state: number = initialState, action: CountActionTypes): number => {
  switch (action.type) {
    case ActionTypes.increment:
      return increment(state, action.payload)
    case ActionTypes.decrement:
      return decrement(state)
  }
  return state;
}
