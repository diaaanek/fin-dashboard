import React from "react";
import ReactFC from 'react-fusioncharts';

const transTrendCard = props => {
  return (
    <div className="col-md-6 mb-4">
      <div id="card" className="card chart-card">
        <div className="chart-container large full-height">
          <ReactFC
            {...{
              type: 'Pie3D',
              width: "100%",
              height: "100%",
              dataFormat: "json",
              containerBackgroundOpacity: "0",
              dataEmptyMessage: "Loading Data...",
              dataSource: {
                chart: {
                  theme: "financial",
                  caption: "Expenses ",
                  subCaption: "By Category Type"
                },
                data:
                 [
    {
      label: "Online Services",
      value: "300000"
    },
    {
      label: "Debt",
      value: "230000"
    },
    {
      label: "Travel",
      value: "180000"
    },
    {
      label: "Utilities",
      value: "270000"
    },
    {
      label: "Insurance",
      value: "20000"
    }
  ]

              }

            }}
          />

        </div>
      </div>
    </div>

  );
};

export default transTrendCard;
