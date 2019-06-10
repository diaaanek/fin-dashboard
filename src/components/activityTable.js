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
      <div className="col-md-8 col-lg-9 is-light-text mb-4">
        <div id="card" className="card is-card-dark">
          <div className="text-medium" style={{ margin: "15px" }}>
            Recent Activity
          </div>

          <table class="table">
            <thead>
              <tr>
                <th />
                <th>Order Number</th>
                <th>Order Date</th>
                <th>Total Price</th>
              </tr>
            </thead>
            <tbody>
              <tr data-toggle="collapse" data-target=".order1">
                <td>+</td>
                <td>1001</td>
                <td>9/29/2016</td>
                <td>$126.27</td>
              </tr>
              <tr class="collapse order1">
                <td>1</td>
                <td />
                <td>Shirt</td>
                <td>$12.27</td>
              </tr>
              <tr class="collapse order1">
                <td>1</td>
                <td />
                <td>Shoes</td>
                <td>$62.27</td>
              </tr>
              <tr data-toggle="collapse" data-target=".order2">
                <td>+</td>
                <td>1002</td>
                <td>9/27/2016</td>
                <td>$92.15</td>
              </tr>
              <tr class="collapse order2">
                <td>2</td>
                <td />
                <td>Item</td>
                <td>$12.27</td>
              </tr>
              <tr class="collapse order2">
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
