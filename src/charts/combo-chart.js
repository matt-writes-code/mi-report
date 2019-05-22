import React from "react";
import Chart from "react-google-charts";

const ComboChart = () => {
  return (
    <div>
      <Chart
        width={"100%"}
        height={"300px"}
        chartType="ComboChart"
        loader={<div>Loading Chart</div>}
        data={[
          ["Month", "CS", "TS", "CR", "CRA", "EA", "Threshold"],
          ["January", 500, 938, 522, 998, 450, 614.6],
          ["February", 400, 1120, 599, 1268, 288, 682],
          ["March", 550, 1167, 587, 807, 397, 623],
          ["April", 650, 1110, 615, 968, 215, 609.4],
          ["May", 880, 691, 629, 1026, 366, 569.6]
        ]}
        options={{
          title: "Volume of alerts",
          vAxis: {
            title: "No of Alerts",
            textStyle: { color: "#f0f0f0" },
            titleTextStyle: { color: "#f0f0f0" }
          },
          hAxis: {
            title: "Month",
            textStyle: { color: "#f0f0f0" },
            titleTextStyle: { color: "#f0f0f0" }
          },
          seriesType: "bars",
          series: { 5: { type: "line" } },
          backgroundColor: "black",
          titleTextStyle: { color: "white" },
          legendTextStyle: { color: "white" }
        }}
        rootProps={{ "data-testid": "1" }}
      />
    </div>
  );
};

export default ComboChart;
