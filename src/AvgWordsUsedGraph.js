import React, { useState, useEffect } from "react";
import { totalLettersUsedObj, totalMsgByEachUser } from "./jsLogic/stringFuncs";
function AvgWordsUsedGraph() {
  const [totalmsgArray, setTotalmsgArray] = useState([]);
  const totalMsgByUser = Object.entries(totalMsgByEachUser);
  const mapUserCount = totalMsgByUser.map((user) => user[1]);

  useEffect(() => {
    const entries = Object.entries(totalLettersUsedObj);
    setTotalmsgArray(entries);
  }, []);
  let i = 0;
  const userMsgData = totalmsgArray.map((entry) => {
    return (
      <p key={entry[0]}>
        Avg Letters used By {entry[0]} per message is{" "}
        {Math.floor(entry[1] / mapUserCount[i])} *(including Spaces)
      </p>
    );
    i++;
  });

  return (
    <div style={{ margin: "20px" }}>
      <h2>avg Letters used By each user Per Msg</h2>
      {userMsgData}
    </div>
  );
}

export default AvgWordsUsedGraph;
