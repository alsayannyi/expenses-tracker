import initialState from "./initialState";
import * as actions from "../actions/actions";

export default function periodFilter(
  state = initialState.periodFilter,
  action
) {
  switch (action.type) {
    case actions.SET_PERIOD_FILTER:
      return action.filter;
    // return Object.assign({}, state, { periodFilter: action.filter });
    default:
      return state;
  }
}
