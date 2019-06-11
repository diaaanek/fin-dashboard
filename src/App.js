import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import TopNav from "./components/topNav";
import Nav from "./components/nav";
import Dashboard from "./containers/Dashboard";
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import ReactFC from "react-fusioncharts";

import styled from 'styled-components';
import Sidebar from "./components/sidebar"

import "./styles.scss";

import config from "./config/config";
import formatNumber from "./utility/formatNumber";

import "./config/chartsTheme";
import "bootstrap/dist/css/bootstrap.css";

ReactFC.fcRoot(FusionCharts, Charts);

const url = `https://sheets.googleapis.com/v4/spreadsheets/${
  config.spreadsheetId
}/values:batchGet?ranges=Sheet1&majorDimension=ROWS&key=${config.apiKey}`;

const App = props => {
  const [items, setItems] = useState(null);
  const [dropdownOptions, setDropdownOptions] = useState([]);
  const [dropdownSelected, setDropdownSelected] = useState(null);

  const [totalRevenue, setTotalRevenue] = useState(null);

const [incomeTotal, setIncomeTotal] = useState(null)
const [totalBalance, setTotalBalance] = useState(null)
const [totalTrans, setTotalTrans] = useState(null)

  const [amRevenue, setAmRevenue] = useState(null);
  const [ebRevenue, setEbRevenue] = useState(null);


  const [etRevenue, setEtRevenue] = useState(null);
  const [productViews, setProductViews] = useState(null);
  const [purchaseRate, setPurchaseRate] = useState(null);
  const [checkoutRate, setCheckoutRate] = useState(null);
  const [abandonedRate, setAbandonedRate] = useState(null);
  const [ordersTrendStore, setOrdersTrendStore] = useState(null);

  useEffect(() => {
    // Fetch data from json and store it in state
    axios
      .get(url)
      .then(response => {
        let batchRows = response.data.valueRanges[0].values;
        const rows = [];
        const header = batchRows[0];

        // Remove header from array
        batchRows.splice(0, 1);

        // Transform Array of Arrays to Array of Objects
        for (const rowArray of batchRows) {
          const rowObject = {};
          let i = 0;
          for (const rowArrayValue of rowArray) {
            rowObject[header[i]] = rowArrayValue;
            i++;
          }
          rows.push(rowObject);
          // console.log(rowObject)
        }

        // Create options for dropdown from months
        let options = [];
        for (const row of rows) {
          options.push(row.month);
        }
        // Remove duplicate months and sort
        options = Array.from(new Set(options)).reverse();

        setItems(rows);
        setDropdownOptions(options);
        setDropdownSelected(options[0]);
      })
      .catch(err => console.error("Error fetching data..."));
  }, []);


useEffect(() => {
  fetch('https://gist.githubusercontent.com/diaaanek/922e5d94b7c7463f4f6cc7dabad88d6a/raw/ec1f52c363b092c8f7d338721667791ea4997ec9/data.json').then(response => {
        console.log(response);
        return response.json();
      }).then(data => {
        // Work with JSON data here

        let totalBal = data.accounts.account[0];
        console.log(totalBal)
        setTotalBalance(totalBal)

      }).catch(err => {
        // Do something for an error here
        console.log("Error Reading data " + err);
      });
}, []);


useEffect(() => {
  fetch('https://gist.githubusercontent.com/diaaanek/b504e93b3703524bccf684ed9698516b/raw/07a0189a3f8f14effd50f8d17dd51a660e1d4c35/data1.json').then(response => {
        console.log(response);
        return response.json();
      }).then(data => {
        // Work with JSON data here
        console.log(data.trxs.transaction);
        // setTotalTrans(data.trxs.transaction)
        var incomeArray = data.trxs.transaction.filter(function(el) {
          return el.categoryType === "INCOME"
        })
          console.log(incomeArray)
          var incomeTotal = incomeArray.reduce(function(prev,cur) {
            return prev + cur.amount.amount;
          }, 0);
          console.log(incomeTotal)
          setIncomeTotal(incomeTotal)


          var expenseArray = data.trxs.transaction.filter(function(el) {
            return el.categoryType === "EXPENSE"
          })
          console.log(expenseArray)
          var transferArray = data.trxs.transaction.filter(function(el) {
            return el.categoryType === "TRANSFER"
          })
          console.log(transferArray)
      }).catch(err => {
        // Do something for an error here
        console.log("Error Reading data " + err);
      });

  //

})

  const refreshData = useCallback(() => {
    if (!dropdownSelected || !items) return;
    // console.log("refreshData called");
    let totalR = 0;
    let totalB = 0;
    let amR = 0;
    let ebR = 0;
    let etR = 0;
    let prodViews = 0;
    let purRate = 0;
    let checkRate = 0;
    let abanRate = 0;
    let ordTrendStore = [];
    for (const row of items) {
      if (row.month === dropdownSelected) {
        // console.log(`${row.month}: ${row.source} : ${row.revenue}`)
        if (row.source === "AM") {
          amR += parseInt(row.revenue, 10);
          ordTrendStore.push({
            label: "Orders",
            value: row.orders,
            displayValue: `${row.orders} orders`
          });
        } else if (row.source === "EB") {
          ebR += parseInt(row.revenue, 10);
          ordTrendStore.push({
            label: "Ebay",
            value: row.orders,
            displayValue: `${row.orders} orders`
          });
        } else if (row.source === "ET") {
          etR += parseInt(row.revenue, 10);
          ordTrendStore.push({
            label: "Etsy",
            value: row.orders,
            displayValue: `${row.orders} orders`
          });
        }
        totalR += parseInt(row.revenue, 10);
        prodViews += parseInt(row.product_views, 10);
        // rates divided by 3 means aritmeticky priemer
        purRate += parseInt(row.purchase_rate / 3, 10);
        checkRate += parseInt(row.checkout_rate / 3, 10);
        abanRate += parseInt(row.abandoned_rate / 3, 10);
      }
    }
    setTotalRevenue(formatNumber(totalR));
    setAmRevenue(formatNumber(amR));
    setEbRevenue(formatNumber(ebR));
    setEtRevenue(formatNumber(etR));
    setProductViews(formatNumber(prodViews));
    setCheckoutRate(checkRate);
    setAbandonedRate(abanRate);
    setPurchaseRate(purRate);
    setOrdersTrendStore(ordTrendStore);

  }, [dropdownSelected, items]);


  useEffect(() => {
    refreshData();
  }, [refreshData]);

  const updateDashboard = event => {
    // refreshData(event.value); // Approach 1, no need since there is Approach 2 useEffect
    setDropdownSelected(event.value);
  };

  return (
    <React.Fragment>
      <TopNav />
      <Nav/>

    <Sidebar/>
    <Wrapper>
      <Dashboard
        totalR={totalRevenue}
        totalB = {totalBalance}
        incomeTotal = {incomeTotal}
        totalTrans = {totalTrans}

        amR={amRevenue}
        etR={etRevenue}
        ebR={ebRevenue}
        prodViews={productViews}
        checkRate={checkoutRate}
        abanRate={abandonedRate}
        purRate={purchaseRate}
        ordTrendStore={ordersTrendStore}
      />
    </Wrapper>
    </React.Fragment>
  );
};

export default App;

const Wrapper = styled.div`
margin-left: 5%;

@media screen and (max-width: 991px) {
  margin-left: 0%;
}

`
