import React, { Component } from "react";
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import ReactFC from "react-fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import data from "../data/update-chart-data.json";
ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const chartConfigs = {
  type: "column2d",
  width: "100%",
  height: 400,
  dataFormat: "json",
  dataSource: {
    data: [
      {
        label: "Venezuela",
        value: "290"
      },
      {
        label: "Saudi",
        value: "260"
      },
      {
        label: "Canada",
        value: "180"
      },
      {
        label: "Iran",
        value: "140"
      },
      {
        label: "Russia",
        value: "115"
      },
      {
        label: "UAE",
        value: "100"
      },
      {
        label: "US",
        value: "30"
      },
      {
        label: "China",
        value: "30"
      }
    ]
  }
};

class UpdateChart extends Component {
  constructor(props) {
    super(props);

    this.state = chartConfigs;

    this.updateData = this.updateData.bind(this);
  }

  // This function generates random number.
  getRandomNumber() {
    var max = 290,
      min = 30;
    return Math.round((max - min) * Math.random() + min);
  }

  // Handler for update button.
  // Randomly updates the values of the chart.
  updateData() {
    var prevDs = Object.assign({}, this.state.dataSource);
    prevDs.data[2].value = this.getRandomNumber();
    prevDs.data[3].value = this.getRandomNumber();
    this.setState({
      dataSource: prevDs
    });
  }

  render() {
    return (
      <div>
        <ReactFC {...this.state} />
        <center>
          <button
            className="btn btn-outline-secondary btn-sm"
            onClick={this.updateData}
          >
            Change Chart Data
          </button>
        </center>
      </div>
    );
  }
}

export default UpdateChart;
