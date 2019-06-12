import React from "react";
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import ReactFC from "react-fusioncharts";

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);


const dataSource = {
  chart: {
    caption: "Balances",
    // subCaption: "Current Balance by Month",
    xAxisName: "Month",
    yAxisName: "Average Values",

    theme: "financial"
  },
  data: [
    { label: "Mar", value: "111.29" },
    { label: "Apr", value: "192.79" },
    { label: "May", value: "192.79" },
    { label: "Jun", value: "192.79" }
  ]
};

const chartConfigs = {
  type: "column2d",
  dataEmptyMessage: "Loading Data...",
  width: "100%",
  height: "100%",
  dataFormat: "json",
  dataSource: dataSource
};

function totalSpend() {
  return (
    <div className="col-md-6 mb-4">
      <div id="card" className="card chart-card">
        <div id="card" className="chart-container large full-height">
      <ReactFC {...chartConfigs} />
    </div>
    </div>
    </div>
  );
}

export default totalSpend;
