import React, { useState, useEffect } from "react";
import { totalavgResTimeObj } from "./jsLogic/stringFuncs";
import { HorizontalBar } from "react-chartjs-2";
import { randomColors } from "./jsLogic/resuable.js";

function ResponseTimeAvg({ isDark }) {
  const [resTime, setresTime] = useState([]);

  useEffect(() => {
    const entries = Object.entries(totalavgResTimeObj);
    setresTime(entries);
  }, []);

  const userNames = resTime.map((car) => car[0]); //userNames
  const usersMsgs = resTime.map((car) => car[1]); //Yaxis Msgs By each user

  const resTimeData = resTime.map((entry) => {
    return (
      <p key={entry[0]}>
        Avg Res Time Of {entry[0]}-> {Math.floor(entry[1])}s
      </p>
    );
  });

  const options = {
    scales: {
      xAxes: [
        {
          ticks: {
            beginAtZero: true,
            min: 0,
            fontStyle: "bold",
            callback: function (value, index, values) {
              return value + "s";
            },
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            callback: function (value, index, values) {
              return value;
            },
          },
        },
      ],
    },
    title: {
      display: true,
      text: "Response Time Of Each user",
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
      <HorizontalBar data={chartState} options={options} />
      <h3 style={{ fontWeight: "500" }}>
        Response Time of User
        <span style={{ fontSize: "14px", fontWeight: "400" }}></span>{" "}
      </h3>
      <div className="textDisplay">{resTimeData}</div>
    </div>
  );
}

export default ResponseTimeAvg;
