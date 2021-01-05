import React, { useState, useEffect } from "react";
import { totalMsgsInDayObj } from "./jsLogic/stringFuncs";
function DayGraph() {
  const [msgsInADay, setmsgsInADay] = useState([]);

  useEffect(() => {
    const entries = Object.entries(totalMsgsInDayObj);
    setmsgsInADay(entries);
  }, []);

  const dayData = msgsInADay.map((entry) => {
    return (
      <p key={entry[0]}>
        Totals Msgs at {entry[0]} is {entry[1]}
      </p>
    );
  });

  return (
    <div style={{ margin: "20px" }}>
      <h3> message By each Day Of Week </h3>
      {dayData}
    </div>
  );
}

export default DayGraph;
