import React from "react";

const RowsConstructor = ({ data, ...props }) => {
  return data.map((expense, i) => {
    const { type, sum, date } = expense;
    return (
      <tr key={(props.lastRateNumber + i + 1).toString()}>
        <th scope="row">{props.lastRateNumber + i + 1}</th>
        <td>{type}</td>
        <td>{sum}</td>
        <td>{date}</td>
      </tr>
    );
  });
};

export default RowsConstructor;
