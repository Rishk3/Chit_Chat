import React from "react";
import AvgWordsUsedGraph from "./AvgWordsUsedGraph";
import DayGraph from "./DayGraph";
import EmojiGraph from "./EmojiGraph";
import MediaGraph from "./MediaGraph";
import MonthGraph from "./MonthGraph";
import NumberOfMsgs from "./NumberOfMsgs";
import RawData from "./RawData";
import ResponseTimeAvg from "./ResponseTimeAvg";
import TimeGraph from "./TimeGraph";

function DataCharts() {
  return (
    <div>
      {/* textData */}

      {/* GraphData */}
      <NumberOfMsgs />
      <AvgWordsUsedGraph />
      <ResponseTimeAvg />
      <MediaGraph />
      <EmojiGraph />
      <DayGraph />
      <MonthGraph />
      <TimeGraph />
    </div>
  );
}

export default DataCharts;
