import React, { useState, useEffect } from "react";
import { totalavgResTimeObj } from "./jsLogic/stringFuncs";

function ResponseTimeAvg() {
  const [resTime, setresTime] = useState([]);

  useEffect(() => {
    const entries = Object.entries(totalavgResTimeObj);
    setresTime(entries);
  }, []);

  const resTimeData = resTime.map((entry) => {
    return (
      <p key={entry[0]}>
        Avg Res Time Of {entry[0]} is {Math.floor(entry[1])} seconds
      </p>
    );
  });
  return (
    <div style={{ margin: "20px" }}>
      <h3>
        {" "}
        Response Time of User
        <span style={{ fontSize: "14px", fontWeight: "400" }}>
          (*counted only if users reply is under 50min)
        </span>{" "}
      </h3>
      {resTimeData}
    </div>
  );
}

export default ResponseTimeAvg;
