import React, { useState, useEffect } from "react";
import { totalLettersUsedObj, totalMsgByEachUser } from "./jsLogic/stringFuncs";
import { Bar } from "react-chartjs-2";
import { randomColors } from "./jsLogic/resuable.js";

function AvgWordsUsedGraph({ isDark }) {
  const [totalmsgArray, setTotalmsgArray] = useState([]);
  const totalMsgByUser = Object.entries(totalMsgByEachUser);
  const mapUserCount = totalMsgByUser.map((user) => user[1]);

  useEffect(() => {
    const entries = Object.entries(totalLettersUsedObj);
    setTotalmsgArray(entries);
  }, []);

  const userNames = totalmsgArray.map((car) => car[0]); //userNames
  const usersMsgs = totalmsgArray.map((car, index) =>
    Math.floor(car[1] / mapUserCount[index])
  ); //Yaxis Msgs By each user

  const userMsgData = totalmsgArray.map((entry, index) => {
    return (
      <p key={entry[0]}>
        {entry[0]}-> {usersMsgs[index]} letters
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
              return value + " letters";
            },
          },
        },
      ],
    },
    title: {
      display: true,
      text: "Letters Used By Each Users",
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
      <Bar data={chartState} options={options} />
      <div className="textDisplay">{userMsgData}</div>
      <h2 style={{ position: "relative", fontWeight: "300" }}>
        Avg Letters used by each user per Msg
        <span style={{ fontSize: "8px", position: "absolute", right: "0" }}>
          *(including spaces)
        </span>
      </h2>
    </div>
  );
}

export default AvgWordsUsedGraph;
