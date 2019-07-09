import React from "react";

const Table = () => {
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
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Cafe</td>
            <td>113</td>
            <td>02.07.19</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Public Transport</td>
            <td>32</td>
            <td>02.07.19</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Internet & Rent</td>
            <td>176</td>
            <td>01.07.19</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
