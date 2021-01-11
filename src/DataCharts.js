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

function DataCharts({ isDark }) {
  return (
    <div className="dataCharts">
      <RawData />
      <div>
        <Grid container justify="space-around">
          <Grid item xs={12} md={5} xl={4} className="grids">
            <NumberOfMsgs isDark={isDark} />
          </Grid>
          <Grid item xs={12} md={5} xl={4} className="grids">
            <AvgWordsUsedGraph isDark={isDark} />
          </Grid>
        </Grid>
      </div>
      <div>
        <Grid container justify="space-around">
          <Grid item xs={12} md={5} xl={4} className="grids">
            <ResponseTimeAvg isDark={isDark} />
          </Grid>
          <Grid item xs={12} md={5} xl={4} className="grids">
            <MediaGraph isDark={isDark} />
          </Grid>
        </Grid>
      </div>
      <div>
        <Grid container justify="space-around">
          <Grid
            item
            xs={12}
            md={5}
            xl={4}
            style={{ border: "1px solid #949494", marginTop: "20px" }}
          >
            <DayGraph isDark={isDark} />
          </Grid>
          <Grid
            item
            xs={12}
            md={5}
            xl={4}
            style={{ border: "1px solid #949494", marginTop: "20px" }}
          >
            <MonthGraph isDark={isDark} />
          </Grid>
        </Grid>
      </div>
      <TimeGraph isDark={isDark} />
      <EmojiGraph />
    </div>
  );
}

export default DataCharts;
