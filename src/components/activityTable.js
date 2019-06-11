import React from "react";
import styled from "styled-components";

const activityTable = props => {
  return (
    <div
      className="row"
      style={{
        minHeight: "400px",
        display: "flex"
      }}
    >
      <div className="col-md-8 col-lg-12 is-light-text mb-4">

        <div id="card" className="card table">
          <div className="header letter-spacing" style={{ margin: "15px", fontSize:"15px"}}>
            Recent Activity
          </div>

          <table className="table col-md-8 col-lg-12 is-light-text mb-4">
            <thead>
              <tr>
                <th />
                <th>ID</th>
                <th>Date</th>
                <th>Type v</th>
                <th>Amount</th>

              </tr>
            </thead>
            <tbody>
              <tr data-toggle="collapse" data-target=".order1">
                <td>+</td>
                <td>1001</td>
                <td>5/29/2019</td>
                <td>REFUND</td>
                <td>$126.27</td>

              </tr>
              <tr className="collapse order1">
                <td>1</td>
                <td />
                <td>Shirt</td>
                <td>$12.27</td>
              </tr>
              <tr className="collapse order1">
                <td>1</td>
                <td />
                <td>Shoes</td>
                <td>$62.27</td>
              </tr>
              <tr data-toggle="collapse" data-target=".order2">
                <td>+</td>
                <td>1002</td>
                <td>6/7/2019</td>
                <td>EXPENSE</td>
                <td>$92.15</td>


              </tr>
              <tr className="collapse order2">
                <td>2</td>
                <td />
                <td>$12.27</td>
              </tr>
              <tr className="collapse order2">
                <td>2</td>
                <td />
                <td>Item</td>
                <td>$62.27</td>
              </tr>
            </tbody>
            
          </table>

        </div>

      </div>
    </div>
  );
};

export default activityTable;
