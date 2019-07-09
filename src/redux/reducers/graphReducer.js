import initialState from "./initialState";
import * as actions from "../actions/actions";

export default function isGraphPicked(
  state = initialState.isGraphPicked,
  action
) {
  switch (action.type) {
    case actions.TOGGLE_GRAPH:
      console.log("toggle graph");
      return !state;
    //   return Object.assign({}, state, { isGraphPicked: !state });
    //   return { ...state, isGraphPicked: !initialState.isGraphPicked };
    default:
      return state;
  }
}
