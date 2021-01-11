import React, { useState, useEffect } from "react";
import { totalMsgByEachUser } from "./jsLogic/stringFuncs.js";
import { Bar } from "react-chartjs-2";
import { randomColors } from "./jsLogic/resuable.js";

function NumberOfMsgs({ isDark }) {
  const [totalmsgArray, setTotalmsgArray] = useState([]);
  useEffect(() => {
    const entries = Object.entries(totalMsgByEachUser);
    setTotalmsgArray(entries);
  }, []);
  const userNames = totalmsgArray.map((car) => car[0]); //userNames
  const usersMsgs = totalmsgArray.map((car) => car[1]); //Yaxis Msgs By each user
  //Graph Making UseEffect

  const userMsgData = totalmsgArray.map((entry) => {
    return (
      <p key={entry[0]}>
        {entry[0]}-> {entry[1]} Messages
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
      text: "Messages Sent By Each User",
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
    <div className="NumberOfMsgs">
      <Bar data={chartState} options={options} />
      <div className="textDisplay">{userMsgData}</div>
    </div>
  );
}

export default NumberOfMsgs;
