import React, { useState, useEffect } from "react";
import { totalMsgsByTimeObj } from "./jsLogic/stringFuncs";
import { Line } from "react-chartjs-2";
import { randomColors } from "./jsLogic/resuable.js";
function TimeGraph({ isDark }) {
  const [msgAtTime, setmsgAtTime] = useState([]);

  useEffect(() => {
    const entries = Object.entries(totalMsgsByTimeObj);
    setmsgAtTime(entries);
  }, []);

  const userNames = msgAtTime.map((car) => car[0]); //userNames
  const usersMsgs = msgAtTime.map((car) => car[1]); //Yaxis Msgs By each user

  const timeData = msgAtTime.map((entry) => {
    return (
      <p style={{ marginRight: "20px" }} key={entry[0]}>
        {entry[0]}:00-{parseInt(entry[0]) + 1}:00 -> {entry[1]} Msgs
      </p>
    );
  });

  const options = {
    scales: {
      xAxes: [
        {
          ticks: {
            fontStyle: "bold",
            callback: function (value, index, values) {
              return value + ":00";
            },
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
      text: "Messages Sent Per Hour",
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
      <h3> Message By each hours</h3>
      <div className="textDisplay"> {timeData}</div>
    </div>
  );
}

export default TimeGraph;
