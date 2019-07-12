import { combineReducers } from "redux";
import isGraphPicked from "./graphReducer";
import periodFilter from "./periodFilterReducer";
import totalExpenses from "./expensesReducer";

const rootReducer = combineReducers({
  isGraphPicked,
  periodFilter,
  totalExpenses
});

export default rootReducer;
