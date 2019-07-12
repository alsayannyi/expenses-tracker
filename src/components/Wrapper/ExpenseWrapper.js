import React from "react";
import AddExpense from "../AddExpense/AddExpense";
import { withRouter } from "react-router-dom";

const ExpenseWrapper = ({ history }) => {
  return <AddExpense onAddExpense={() => history.push("/")} />;
};

export default withRouter(ExpenseWrapper);
