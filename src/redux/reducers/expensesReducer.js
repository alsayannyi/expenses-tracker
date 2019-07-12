import initialState from "./initialState";
import * as actions from "../actions/actions";

export default function totalExpenses(
  state = initialState.totalExpenses,
  action
) {
  switch (action.type) {
    case actions.ADD_EXPENSE:
      return [...state, action.expense];
    default:
      return state;
  }
}
