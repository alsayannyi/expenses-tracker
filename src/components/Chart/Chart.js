import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { deflate } from "zlib";
import { ADD_EXPENSE } from "../../redux/actions/actions";
import { useSelector } from "react-redux";
import { format, isThisWeek } from "date-fns";

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
const DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];
const Month = MONTHS[new Date().getMonth()];
const Day = DAYS[new Date().getDay() - 1];
const Week = DAYS.slice(0, new Date().getDay());

const seriesType = {
  SHOW_DAY: {
    name: `expenses per today, ${Day}`,
    data: [49.9, 71.5, 106.4]
  },
  SHOW_WEEK: {
    name: "expenses per week",
    data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6].slice(
      0,
      new Date().getDay()
    )
  },
  SHOW_MONTH: {
    name: `expenses per ${Month}`,
    data: [
      49.9,
      71.5,
      106.4,
      129.2,
      144.0,
      176.0,
      135.6,
      83.6,
      78.8,
      98.5,
      93.4,
      106.0,
      84.5,
      105.0,
      104.3,
      91.2,
      83.5,
      106.6,
      92.3,
      48.9,
      38.8,
      39.3,
      41.4,
      47.0,
      48.3,
      59.0,
      59.6,
      52.4,
      65.2,
      59.3,
      51.2,
      9.7,
      52.6,
      75.5,
      57.4,
      60.4,
      47.6,
      39.1,
      46.8,
      51.1
    ].slice(0, new Date().getDate())
  }
};

// function getStartWeek() {
//   let d = new Date().getDay(); // 5
//   let delta = d - 1; //4
//   let weekStartDate = new Date().getDate() - delta;
//   let weekStart = new Date(new Date().setDate(weekStartDate));
// }

// const extractDataToChartSeries = (data, chartSeries) => {
//   data.forEach(expense => {
//     const { type, sum, date } = expense;
//     const epxenseDay = new Date(date).getDay();
//     const expenseMonth = new Date(date).getMonth();
//     const expenseDate = new Date(date).getDate();

//     if (epxenseDay === new Date().getDay())
//       chartSeries.SHOW_DAY.data = chartSeries.SHOW_DAY.data.push(
//         parseFloat(sum)
//       );
//     if (expenseMonth === new Date().getMonth()) {
//       chartSeries.SHOW_MONTH.data[expenseDate - 1] =
//         chartSeries.SHOW_MONTH.data[expenseDate - 1] + parseFloat(sum);
//     }
//   });
// };

function getMonthDaysAray(currentDay, arr = []) {
  let dd;
  const mm =
    new Date().getMonth() + 1 < 10
      ? `0${new Date().getMonth() + 1}`
      : new Date().getMonth() + 1;

  for (let i = 1; i <= currentDay; i++) {
    if (i < 10) dd = `0${i}`;
    else dd = "" + i;
    let dayFormat = `${dd}/${mm}`;
    arr.push(dayFormat);
  }
  return arr;
}

const xAxisCategories = {
  SHOW_DAY: ["cafes", "Shopping", "Taxes"],
  SHOW_WEEK: Week,
  SHOW_MONTH: getMonthDaysAray(new Date().getDate())
};

let options = {
  chart: {
    type: "column"
  },
  title: {
    text: "Your Expenses for selected period"
  },
  credits: {
    enabled: false
  },

  xAxis: {
    categories: DAYS,
    crosshair: true
  },
  yAxis: {
    min: 0,
    title: {
      text: "$ USD",
      align: "high",
      rotation: 0,
      offset: 0,
      y: -10
    }
  },
  tooltip: {
    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
    pointFormat:
      '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
      '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
    footerFormat: "</table>",
    shared: true,
    useHTML: true
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0
    }
  },
  series: [
    {
      name: `${Month}`,
      data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6]
    }
  ]
};

const Chart = ({ activePeriod }) => {
  const currentExpenses = useSelector(state => {
    return state.totalExpenses;
  });

  const dateCheckTest = data => {
    data.forEach(expense => {
      const { date } = expense;
      const result = isThisWeek(new Date(date));
      console.log("is this expensein this week ? -", result);
    });
  };
  dateCheckTest(currentExpenses);

  if (activePeriod)
    options = {
      ...options,
      series: [seriesType[activePeriod]],
      xAxis: { ...options.xAxis, categories: xAxisCategories[activePeriod] }
    };

  return (
    <div className="row mt-2">
      <div className="col-sm-12">
        {<HighchartsReact highcharts={Highcharts} options={options} />}
      </div>
    </div>
  );
};

export default Chart;
