import React, { useState, useEffect } from "react";
import { totalMsgsInDayObj } from "./jsLogic/stringFuncs";
import { Radar } from "react-chartjs-2";
import { randomColors } from "./jsLogic/resuable.js";
function DayGraph({ isDark }) {
  const [msgsInADay, setmsgsInADay] = useState([]);

  useEffect(() => {
    const entries = Object.entries(totalMsgsInDayObj);
    setmsgsInADay(entries);
  }, []);

  const userNames = msgsInADay.map((car) => car[0]); //userNames
  const usersMsgs = msgsInADay.map((car) => car[1]); //Yaxis Msgs By each user

  const options = {
    scale: {
      angleLines: {
        display: true,
        fontColor: isDark ? "white" : "rgba(0,0,0,1)",
        borderColor: isDark ? "white" : "rgba(0,0,0,1)",
      },
      ticks: {
        suggestedMin: 50,
        suggestedMax: 100,
      },
    },
    title: {
      display: true,
      text: "TotalMessages transferred By Each Day",
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
        pointBorderColor: randomColors,
        borderColor: isDark ? "white" : "rgba(0,0,0,1)",
        borderWidth: 2,
        data: usersMsgs,
      },
    ],
  };
  const dayData = msgsInADay.map((entry) => {
    return (
      <p key={entry[0]}>
        {entry[0]}-> {entry[1]}
      </p>
    );
  });

  return (
    <div className="weekGraph" style={{ margin: "20px", padding: "20px 20px" }}>
      <Radar data={chartState} options={options} />
      <h3 style={{ fontWeight: "500" }}> Messages In a Day </h3>
      <div className="textDisplay">{dayData}</div>
    </div>
  );
}

export default DayGraph;
