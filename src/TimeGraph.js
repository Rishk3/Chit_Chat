import React, { useState, useEffect } from "react";
import { totalMsgsByTimeObj } from "./jsLogic/stringFuncs";
function TimeGraph() {
  const [msgAtTime, setmsgAtTime] = useState([]);

  useEffect(() => {
    const entries = Object.entries(totalMsgsByTimeObj);
    setmsgAtTime(entries);
  }, []);

  const timeData = msgAtTime.map((entry) => {
    return (
      <p key={entry[0]}>
        Totals Msgs in {entry[0]}-{parseInt(entry[0]) + 1} is {entry[1]}
      </p>
    );
  });
  return (
    <div style={{ margin: "20px" }}>
      <h3> message By each hours</h3>
      {timeData}
    </div>
  );
}

export default TimeGraph;
