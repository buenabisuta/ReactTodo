import { ActionTypes } from "../ActionTypes";
import { CountActionTypes } from "./Types";

export const increment = (amount: number): CountActionTypes => {
  return {
    type: ActionTypes.increment,
    payload: amount,
  }
}

export const decrement = (): CountActionTypes => {
  return {
    type: ActionTypes.decrement,
  }
}
