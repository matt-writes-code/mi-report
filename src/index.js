import React from "react";
import ReactDOM from "react-dom";
import Layout from "./components/layout";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1 className="title">MI Report Dashboard</h1>
      <div className="poc">Proof of Concept</div>
      <Layout />
      {/* <a
        href="https://fusioncharts.github.io/react-fusioncharts-component/"
        target="_blank"
        className="footer"
      >
        React FusionCharts
      </a> */}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
