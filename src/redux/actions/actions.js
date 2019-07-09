export const TOGGLE_GRAPH = "TOGGLE_GRAPH";
export const SET_PERIOD_FILTER = "SET_PERIOD_FILTER";

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

// export function showTable(isTableShown) {
//   return { type: SHOW_TABLE, isTableShown };
// }

export function setPeriodFilter(filter) {
  return { type: SET_PERIOD_FILTER, filter };
}
