import React from "react";
import { useSelector } from "react-redux";
import RowsConstructor from "./RowsConstructor";

const Table = () => {
  const currentExpenses = useSelector(state => {
    return state.totalExpenses;
  });
  console.log(currentExpenses);
  // tBody.getElementsByTagName("th").length
  const lastRateNumber = 3;

  return (
    <div className="row mt-2">
      <h5 className="col-12 text-center">Your List of Expenses</h5>
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Type</th>
            <th scope="col">Sum</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody id="t-body">
          <tr>
            <th scope="row">1</th>
            <td>Cafe</td>
            <td>113</td>
            <td>2019-07-02</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Public Transport</td>
            <td>32</td>
            <td>2019-07-02</td>
          </tr>
          <tr className="fixed">
            <th scope="row">3</th>
            <td>Internet & Rent</td>
            <td>176</td>
            <td>2019-07-01</td>
          </tr>
          {currentExpenses.length > 0 && (
            <RowsConstructor
              data={currentExpenses}
              lastRateNumber={lastRateNumber}
            />
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
