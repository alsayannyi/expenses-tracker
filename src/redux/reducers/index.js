import { combineReducers } from "redux";
import isGraphPicked from "./graphReducer";
import periodFilter from "./periodFilterReducer";

const rootReducer = combineReducers({
  isGraphPicked,
  periodFilter
});

export default rootReducer;
