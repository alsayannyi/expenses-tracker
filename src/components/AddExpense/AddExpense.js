import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addExpense } from "../../redux/actions/actions";

const AddExpense = ({ totalExpenses, addExpense, onAddExpense }) => {
  const [expType, setExpType] = useState({ type: null });
  const [expSum, setExpSum] = useState({ sum: null });
  const [expDate, setExpDate] = useState({ date: null });

  const handleSubmit = e => {
    e.preventDefault();

    const newExpense = {
      type: e.target.elements.type.value ? e.target.elements.type.value : null,
      sum: e.target.elements.sum.value ? e.target.elements.sum.value : null,
      date: e.target.elements.date.value ? e.target.elements.date.value : null
    };
    onAddExpense();
    addExpense(newExpense);
  };

  useEffect(() => {
    console.log(expType, expSum, expDate);
  });

  return (
    <>
      <h5 className="text-center mb-3">Add New Expense</h5>
      <form className="container" onSubmit={handleSubmit}>
        <div className="input-group row mb-5">
          <div className="input-group-prepend">
            <span className="input-group-text">Type:</span>
          </div>
          <input
            type="text"
            className="form-control"
            name="type"
            onChange={e => setExpType({ expType: e.target.value })}
          />
          <p>{expType.type}</p>
        </div>

        <div className="input-group row mb-5">
          <div className="input-group-prepend">
            <span className="input-group-text">$</span>
          </div>
          <input
            type="text"
            className="form-control"
            name="sum"
            onChange={e => setExpSum({ expSum: e.target.value })}
          />
        </div>

        <div className="input-group row mb-5">
          <div className="input-group-prepend">
            <span className="input-group-text">Date:</span>
          </div>
          <input
            type="date"
            className="form-control"
            name="date"
            onChange={e => setExpDate({ expDate: e.target.value })}
          />
        </div>

        <div className="input-group row mb-5 justify-content-center">
          <p className="col-xs-3">
            <Link to="/" className="text-decoration-none">
              <input
                type="button"
                value="Cancel"
                className="btn btn-block btn-outline-secondary"
              />
            </Link>
          </p>
          <p className="col-xs-3 ml-4">
            <input
              type="submit"
              value="Add"
              className="col-xs-3 ml-4 btn btn-success btn-block"
            />
          </p>
        </div>
      </form>
    </>
  );
};

const mapStateToProps = state => {
  const { totalExpenses } = state;
  return { totalExpenses };
};

const mapDispatchToProps = dispatch => ({
  addExpense: expense => dispatch(addExpense(expense))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddExpense);
