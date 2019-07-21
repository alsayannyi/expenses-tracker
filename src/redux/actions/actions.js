export const TOGGLE_GRAPH = "TOGGLE_GRAPH";
export const SET_PERIOD_FILTER = "SET_PERIOD_FILTER";
export const ADD_EXPENSE = "ADD_EXPENSE";

//actions
export const PERIOD_FILTERS = {
  SHOW_DAY: "SHOW_DAY",
  SHOW_WEEK: "SHOW_WEEK",
  SHOW_MONTH: "SHOW_MONTH"
};

//action creators

export function toggleGraph() {
  return { type: TOGGLE_GRAPH };
}

export function addExpense(expense) {
  return { type: ADD_EXPENSE, expense };
}

export function setPeriodFilter(filter) {
  return { type: SET_PERIOD_FILTER, filter };
}
