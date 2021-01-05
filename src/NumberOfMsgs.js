import React, { useRef, useState, useEffect } from "react";
import * as d3 from "d3";
import { totalMsgByEachUser } from "./jsLogic/stringFuncs.js";

function NumberOfMsgs() {
  const [totalmsgArray, setTotalmsgArray] = useState([]);

  useEffect(() => {
    const entries = Object.entries(totalMsgByEachUser);
    setTotalmsgArray(entries);
  }, []);

  const userMsgData = totalmsgArray.map((entry) => {
    return (
      <p key={entry[0]}>
        Total Messages done By {entry[0]} is {entry[1]}
      </p>
    );
  });

  return (
    <div>
      <h2>Msgs From Each user</h2>
      {userMsgData}
    </div>
  );
}

export default NumberOfMsgs;
