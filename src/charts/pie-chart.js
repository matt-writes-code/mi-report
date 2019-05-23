import React from "react";
import Chart from "react-google-charts";
import Spinner from '../components/spinner.js';

const PieChart = () => {
  return (
    <div>
      <Chart
        width={"100%"}
        height={"350px"}
        chartType="PieChart"
        loader={<div><Spinner /></div>}
        data={[
          ["Task", "Hours per Day"],
          ["Alert closures", 11],
          ["Reports", 2],
          ["Trainings", 2],
          ["Meetings", 2],
          ["Exception handling", 7]
        ]}
        options={{
          title: "Daily Activities",
          // Just add this option
          pieHole: 0.6,
          backgroundColor: "black",
          titleTextStyle: { color: "white" },
          legendTextStyle: { color: "white" },
          legend: { position: "top", maxLines: "5" }
        }}
        rootProps={{ "data-testid": "3" }}
      />
    </div>
  );
};

export default PieChart;
