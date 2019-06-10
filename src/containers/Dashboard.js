import React from "react";
import Card from "../components/card";
import RatesCard from "../components/ratesCard";
import TransTrendCard from "../components/transTrendCard";
import Spinner from "../components/spinner";
import ActivityTable from "../components/activityTable"
import TotalSpend from "../components/totalSpend"

const Dashboard = props => {
  if (!props.totalR && !props.prodViews) {
    return (
      <div
        style={{
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
          height: "80vh"
        }}
      >
        <Spinner />
      </div>
    );
  }

    // body={"↑ 25% since last week"}

  return (
    <div className="container-fluid pr-5 pl-5 pt-5">
      {/* row 1 - revenue */}
      <div className="row">
        <Card
          heading={"Total Revenue"}
          value={Math.round(props.incomeTotal) + ".00"}
          icon={"2"}

          revenue

          />

        <Card
          heading={"Account Balance"}
           value={props.totalB.currentBalance.amount}
          caption={props.totalB.accountName}
          icon={"1"}
          revenue
        />
        <Card
          heading={"Total Users"}
          value={props.ebR}
          icon={"2"}
          revenue
        />
        <Card
          heading={"Progress"}
          value={props.etR}
          icon={"3"}
          revenue
        />
      </div>

      {/* row 2 - total profit */}
      <div className="row">
        <Card

          heading={"Total Profit"}
          value={props.prodViews} />
        {props.purRate && props.checkRate && props.abanRate ? (
          <RatesCard
            purchaseRate={props.purRate}
            checkoutRate={props.checkRate}
            abandonedRate={props.abanRate}
          />
        ) : null}
      </div>

      {/* row 3 - transactions trend */}
      <div
        className="row"
        style={{
          minHeight: "400px",
          display: "flex"
        }}
      >

        {props.ordTrendStore ? (
          <TransTrendCard ordersTrendStore={props.ordTrendStore} />
        ) : null}

        {props.ordTrendStore ? (
          <TotalSpend/>
        ) : null}



    </div>
    <ActivityTable />



</div>

  );
};

export default Dashboard;
