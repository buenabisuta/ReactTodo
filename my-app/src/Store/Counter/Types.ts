import { Action, ActionCreator } from "redux";
import { ActionTypes } from "../ActionTypes";

interface incrementAction extends Action {
  type: typeof ActionTypes.increment;
  payload: number
}

interface decrementAction extends Action {
  type: typeof ActionTypes.decrement;
}

export type CountActionTypes = incrementAction | decrementAction;
