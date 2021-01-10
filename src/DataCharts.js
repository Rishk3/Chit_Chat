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
import Grid from "@material-ui/core/Grid";
import { Paper } from "@material-ui/core";
function DataCharts({ isDark }) {
  return (
    <div className="dataCharts">
      {/* textData */}
      {/* GraphData */}
      <div>
        <Grid container justify="space-around">
          <Grid item xs={12} md={5} xl={4} className="grids">
            <NumberOfMsgs isDark={isDark} />
          </Grid>
          <Grid item xs={12} md={5} xl={4} className="grids">
            <AvgWordsUsedGraph />
          </Grid>
        </Grid>
      </div>

      {/* 
      <ResponseTimeAvg />
      <MediaGraph />
      <EmojiGraph />
      <DayGraph />
      <MonthGraph />
      <TimeGraph /> */}
    </div>
  );
}

export default DataCharts;
