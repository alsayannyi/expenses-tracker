import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ExpenseTracker from "./components/ExpenseTracker/ExpenseTracker";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";
import { Provider as ReduxProvider } from "react-redux";
import rootReducer from "./redux/reducers/index";
// import initialState from "./redux/reducers/initialState";

// const preloadedState = {
//   isGraphPicked: initialState.isGraphPicked,
//   periodFilter: initialState.periodFilter
// };

const store = createStore(
  rootReducer,
  //   preloadedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

console.log(store.getState());

ReactDOM.render(
  <ReduxProvider store={store}>
    <ExpenseTracker />
  </ReduxProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
