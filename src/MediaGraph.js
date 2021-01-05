import React, { useState, useEffect } from "react";
import { totalMediaSentObj } from "./jsLogic/stringFuncs";
function MediaGraph() {
  const [totalPicSent, setTotalPicSent] = useState([]);
  console.log("asbdjhsdbcf", totalMediaSentObj);

  useEffect(() => {
    const entries = Object.entries(totalMediaSentObj);
    setTotalPicSent(entries);
  }, []);

  const picData = totalPicSent.map((entry) => {
    return (
      <p key={entry[0]}>
        Total Pictures sent By {entry[0]} is {entry[1]}
      </p>
    );
  });

  return (
    <div style={{ margin: "20px" }}>
      <h3>Pictures Shared</h3>
      {picData}
    </div>
  );
}

export default MediaGraph;
