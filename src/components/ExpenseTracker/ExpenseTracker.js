import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import logo from "../../logo.svg";
import "../../bootstrap.min.css";
import "./ExpenseTracker.css";
import Button from "../Button/Button";
import Chart from "../Chart/Chart";
import ToggleButton from "../ToggleButton/ToggleButton";
import Table from "../Table/Table";
import {
  toggleGraph,
  setPeriodFilter,
  PERIOD_FILTERS
} from "../../redux/actions/actions";

function ExpenseTracker({
  isGraphPicked,
  periodFilter,
  toggleGraph,
  setPeriodFilter
}) {
  const { SHOW_DAY, SHOW_WEEK, SHOW_MONTH } = PERIOD_FILTERS;
  return (
    <>
      <header className="App container-fluid">
        <nav id="header" className="navbar navbar-dark bg-dark">
          <a className="navbar-brand" href="#ExpenseTracker">
            <img src={logo} className="App-logo rounded" alt="logo" />
          </a>
          <h5 className="mb-0 mr-auto">Expenses Tracker</h5>
        </nav>
      </header>

      <main className="container-fluid">
        <div className="row mt-4">
          <Link to="/add" className="col-3 ml-3">
            <Button name="New Expense" cssClass="btn btn-primary" />{" "}
          </Link>
        </div>
        <div className="row mt-4 no-gutters justify-content-center">
          <div className=" btn-group" role="group">
            <Button
              name="Day"
              cssClass="col-4 btn btn-outline-primary"
              filter={SHOW_DAY}
              periodFilterClicked={filter => setPeriodFilter(SHOW_DAY)}
            />
            <Button
              name="Week"
              cssClass="col-4 btn btn-outline-primary"
              filter={SHOW_WEEK}
              periodFilterClicked={filter => setPeriodFilter(SHOW_WEEK)}
            />
            <Button
              name="Month"
              cssClass="col-4 btn btn-outline-primary"
              filter={SHOW_MONTH}
              periodFilterClicked={filter => setPeriodFilter(SHOW_MONTH)}
            />
          </div>
        </div>
      </main>
      <footer className="container-fluid">
        <div className="row">
          <ToggleButton showGraphClicked={() => toggleGraph()} />
        </div>
        {isGraphPicked ? <Chart activePeriod={periodFilter} /> : <Table />}
      </footer>
    </>
  );
}

const mapStateToProps = state => {
  const { isGraphPicked, periodFilter } = state;

  return { isGraphPicked, periodFilter };
};

const mapDispatchToProps = dispatch => ({
  toggleGraph: () => dispatch(toggleGraph()),
  setPeriodFilter: filter => dispatch(setPeriodFilter(filter))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpenseTracker);
