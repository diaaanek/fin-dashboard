import React from "react";
import ReactFC from "react-fusioncharts";

const transTrendCard = props => {
  return (
    <div className="col-md-6 mb-4">
      <div id="card" className="card is-card-dark chart-card">
        <div className="chart-container large full-height">
          <ReactFC
            {...{
              type: "bar2d",
              width: "100%",
              height: "100%",
              dataFormat: "json",
              containerBackgroundOpacity: "0",
              dataEmptyMessage: "Loading Data...",
              dataSource: {
                chart: {
                  theme: "financial",
                  caption: "Latest Transactions",
                  subCaption: "By Category Type"
                },
                data: props.ordersTrendStore

              }

            }}
          />

        </div>
      </div>
    </div>

  );
};

export default transTrendCard;
