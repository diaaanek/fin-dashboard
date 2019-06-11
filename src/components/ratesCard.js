import React from "react";
import ReactFC from "react-fusioncharts";

const ratesCard = props => {
  return (
    <div className="col-md-8 col-lg-9 is-light-text mb-4">

      <div  id="card" className="card chart-card">
        <div className="is-dark-text-light header letter-spacing text-small" style={{marginBottom: "1em"}}>
        Sales Breakdown
        </div>
        <div className="row full-height">
          <div className="col-sm-4 full height">

            <div className="chart-container full-height">
              <ReactFC
                {...{
                  type: "doughnut2d",
                  width: "100%",
                  height: "100%",
                  dataFormat: "json",
                  containerBackgroundOpacity: "0",
                  dataSource: {
                    chart: {

                      caption: "INCOME",
                      theme: "financial",
                      defaultCenterLabel: `${props.purchaseRate}%`,
                      paletteColors: "#3B70C4, #000000"
                    },
                    data: [
                      {
                        label: "active",
                        value: `${props.purchaseRate}`
                      },
                      {
                        label: "inactive",
                        alpha: 5,
                        value: `${100 - props.purchaseRate}`
                      }
                    ]
                  }
                }}
              />
            </div>
          </div>
          <div className="col-sm-4 full-height border-left border-right">
            <div className="chart-container full-height">
              <ReactFC
                {...{
                  type: "doughnut2d",
                  width: "100%",
                  height: "100%",
                  dataFormat: "json",
                  containerBackgroundOpacity: "0",
                  dataSource: {
                    chart: {
                      caption: "Profit",
                      theme: "financial",
                      defaultCenterLabel: `50%`,
                      paletteColors: "#A7C958, #000000"
                    },
                    data: [
                      {
                        label: "active",
                        value: `50`
                      },
                      {
                        label: "inactive",
                        alpha: 5,
                        value: `50`
                      }
                    ]
                  }
                }}
              />
            </div>
          </div>
          <div className="col-sm-4 full-height">
            <div className="chart-container full-height">
              <ReactFC
                {...{
                  type: "doughnut2d",
                  width: "100%",
                  height: "100%",
                  dataFormat: "json",
                  containerBackgroundOpacity: "0",
                  dataSource: {
                    chart: {
                      caption: "Outcome",
                      theme: "financial",
                      defaultCenterLabel: `3%`,
                      paletteColors: "#EDF8B1, #000000"
                    },
                    data: [
                      {
                        label: "active",
                        value: `${84 - 80}`
                      },
                      {
                        label: "inactive",
                        alpha: 5,
                        value: `${100 - props.abandonedRate}`
                      }
                    ]
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ratesCard;
