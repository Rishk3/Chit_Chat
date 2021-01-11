import React, { useState, useEffect } from "react";
import { totalMediaSentObj } from "./jsLogic/stringFuncs";
import { HorizontalBar } from "react-chartjs-2";
import { randomColors } from "./jsLogic/resuable.js";
function MediaGraph({ isDark }) {
  const [totalPicSent, setTotalPicSent] = useState([]);
  console.log("asbdjhsdbcf", totalMediaSentObj);

  useEffect(() => {
    const entries = Object.entries(totalMediaSentObj);
    setTotalPicSent(entries);
  }, []);
  const userNames = totalPicSent.map((car) => car[0]); //userNames
  const usersMsgs = totalPicSent.map((car) => car[1]); //Yaxis Msgs By each user

  const picData = totalPicSent.map((entry) => {
    return (
      <p key={entry[0]}>
        {entry[0]}-> {entry[1]}
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
              return value;
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
      text: "Pictures Shared By each user",
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
      <h3 style={{ fontWeight: "500" }}>Pictures Shared</h3>
      <div className="textDisplay">{picData}</div>
    </div>
  );
}

export default MediaGraph;
