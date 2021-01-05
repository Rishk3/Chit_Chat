import React, { useState, useEffect } from "react";
import { totalMsgsInMonthObj } from "./jsLogic/stringFuncs";

function MonthGraph() {
  const [msgsInAMonth, setmsgsInAMonth] = useState([]);

  useEffect(() => {
    const entries = Object.entries(totalMsgsInMonthObj);
    setmsgsInAMonth(entries);
  }, []);

  const monthData = msgsInAMonth.map((entry) => {
    return (
      <p key={entry[0]}>
        Totals Msgs In {entry[0]} is {entry[1]}
      </p>
    );
  });
  return (
    <div style={{ margin: "20px" }}>
      <h3> message By each Day Of Week </h3>
      {monthData}
    </div>
  );
}

export default MonthGraph;
