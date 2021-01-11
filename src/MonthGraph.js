import React, { useState, useEffect } from "react";
import { totalMsgsInMonthObj } from "./jsLogic/stringFuncs";
import { Line } from "react-chartjs-2";
import { randomColors } from "./jsLogic/resuable.js";

function MonthGraph({ isDark }) {
  const [msgsInAMonth, setmsgsInAMonth] = useState([]);

  useEffect(() => {
    const entries = Object.entries(totalMsgsInMonthObj);
    setmsgsInAMonth(entries);
  }, []);

  const userNames = msgsInAMonth.map((car) => car[0]); //userNames
  const usersMsgs = msgsInAMonth.map((car) => car[1]); //Yaxis Msgs By each user

  const monthData = msgsInAMonth.map((entry) => {
    return (
      <p style={{ marginRight: "20px" }} key={entry[0]}>
        {entry[0]} -> {entry[1]}
      </p>
    );
  });

  const options = {
    scales: {
      xAxes: [
        {
          ticks: {
            fontStyle: "bold",
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            min: 0,
            callback: function (value, index, values) {
              return value + " msgs";
            },
          },
        },
      ],
    },
    title: {
      display: true,
      text: "Messages Sent By Each User In Each Month",
      fontColor: isDark ? "white" : "rgba(0,0,0,1)",
      fontSize: 20,
    },
    legend: {
      display: false,
    },
  };
  const chartState = {
    labels: userNames,
    datasets: [
      {
        backgroundColor: randomColors,
        borderColor: isDark ? "white" : "rgba(0,0,0,1)",
        borderWidth: 2,
        data: usersMsgs,
      },
    ],
  };

  return (
    <div style={{ margin: "20px" }}>
      <Line data={chartState} options={options} />
      <h3> Messages By Each Month </h3>
      <div className="textDisplay">{monthData}</div>
    </div>
  );
}

export default MonthGraph;
