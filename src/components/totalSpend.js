import React from "react";
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import ReactFC from "react-fusioncharts";

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const dataSource = {
  chart: {
    caption: "Latest Transactions",
    // subCaption: "In MMbbl = One Million barrels",
    xAxisName: "Month",
    yAxisName: "Dollars",
    numberSuffix: "K",
    theme: "financial"
  },
  data: [
    { label: "Jan", value: "190" },
    { label: "Feb", value: "160" },
    { label: "March", value: "180" },
    { label: "April", value: "140" },
    { label: "May", value: "115" },
    { label: "June", value: "100" }
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
      <div id="card" className="card is-card-dark chart-card">
        <div id="card" className="chart-container large full-height">
      <ReactFC {...chartConfigs} />
    </div>
    </div>
    </div>
  );
}

export default totalSpend;
