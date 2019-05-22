import React from "react";
import Chart from "react-google-charts";

const BarChart = () => {
  return (
    <div>
      <Chart
        width={"100%"}
        height={"300px"}
        chartType="Bar"
        loader={<div>Loading Chart</div>}
        data={[
          ["Date", "Volume"],
          ["18", 3453],
          ["19", 3510],
          ["20", 4500],
          ["21", 4050],
          ["22", 4102]
        ]}
        options={{
          // Material design options
          chart: {
            title: "Volume",
            subtitle: "22 May 2019"
          }
        }}
        // For tests
        rootProps={{ "data-testid": "2" }}
      />
    </div>
  );
};

export default BarChart;
