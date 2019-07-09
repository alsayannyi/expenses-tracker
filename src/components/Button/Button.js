import React from "react";

const Button = ({
  name,
  cssClass = "col-3 ml-3 btn btn-primary",
  periodFilterClicked = null,
  filter = null
}) => {
  return (
    <button
      type="button"
      filter={filter}
      className={cssClass}
      onClick={periodFilterClicked}
    >
      {name}
    </button>
  );
};

export default Button;
