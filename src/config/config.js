const config = {
  apiKey: "AIzaSyDu1dkhpUCYHWSgGb9G52wnor0Uqz18snE",
  spreadsheetId: "1SjmC8uAhKuTiuNfifilCZKJh4lOznNTcobF6WRCRILE"
};

// fetch
// {trxs_count.transaction.TOTAL.count}

// fetching account info
// Object [0] => account
// accountName
// availableBalance.amount
// balance.amount
// currentBalance.amount
// lastUpdated
// const getBalance => () {
// accounts



// }
// // balances - chart
// []


// transactions
function getTransactions () {
fetch('https://gist.githubusercontent.com/diaaanek/b504e93b3703524bccf684ed9698516b/raw/07a0189a3f8f14effd50f8d17dd51a660e1d4c35/data1.json').then(response => {
      console.log(response);
      return response.json();
    }).then(data => {
      // Work with JSON data here
      console.log(data.trxs.transaction);
      var incomeArray = data.trxs.transaction.filter(function(el) {
        return el.categoryType === "INCOME"
      })
        console.log(incomeArray)
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
}
getTransactions();


export default config;

//

//
//     fetch('https://jsonplaceholder.typicode.com/photos?albumId=1')
// .then(response => {
//       console.log(response);
//       return response.json();
//     }).then(data => {
//       // Work with JSON data here
//       console.log(data);
//     }).catch(err => {
//       // Do something for an error here
//       console.log("Error Reading data " + err);
//     });
