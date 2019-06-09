import React from "react";
import Chart from "react-google-charts";
import { Spinner } from 'reactstrap';

const piechartdata = "https://api.myjson.com/bins/zc2u9";
const oridata = [
  ["Task", "Hours per Day"],
  ["Alert closures", 11],
  ["Reports", 2],
  ["Trainings", 2],
  ["Meetings", 2],
  ["Exception handling", 7]
];

export default class PieChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    fetch(`${piechartdata}`)
      .then(d => d.json())
      .then(result => {
        this.setState({
          data: result
        })
      })
  }

  render() {
    const { data } = this.state;

    return (
      <div>
        <Chart
          width={"100%"}
          height={"350px"}
          chartType="PieChart"
          loader={<div><Spinner color="info" /></div>}
          data={data}
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
  }
}
