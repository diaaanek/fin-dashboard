import React from "react";


const activityTable = ({totalTrans, props}) => {

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
          <div className="header" style={{ margin: "15px", fontSize:"15px"}}>
            Recent Activity
          </div>
          <div className="table-responsive">
          <table className=".table-sm table col-md-8 col-lg-12 is-light-text mb-4">
            <thead>
              <tr>
                <th scope="col"/>
                <th scope="col">ID</th>
                <th scope="col">Date</th>
                <th scope="col">Type</th>
                <th scope="col">Amount</th>
              </tr>
            </thead>
            {totalTrans.slice(0,5).map((trans) => (
            <tbody className="text-small">

              <tr >
                <td style={{cursor:"pointer"}}>+</td>
                <td>{trans.id}</td>
                <td>{trans.createdDate}</td>
                <td>{trans.categoryType}</td>
                <td>${trans.amount.amount}</td>

              </tr>

            </tbody>
  ))}
<button className="text-small button-new"> View All </button>
          </table>
</div>
        </div>

      </div>
    </div>
  );
};

export default activityTable;
