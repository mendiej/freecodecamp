//Exact Change: https://www.freecodecamp.com/challenges/Exact-Change

//Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument. cid is a 2D array listing available currency. Return the string "Insufficient Funds" if cash-in-drawer is less than the change due. Return the string "Closed" if cash-in-drawer is equal to the change due. Otherwise, return change in coin and bills, sorted in highest to lowest order. Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

var amounts = {"PENNY": 0.01,"NICKEL": 0.05,"DIME": 0.10,"QUARTER": 0.25,"ONE": 1.00,"FIVE": 5.00,"TEN": 10.00,"TWENTY": 20.00,"ONE HUNDRED": 100.00};

function checkCashRegister(price, cash, cid) {
  // information flow
  var cidAmounts = [];
  for (var c = 0; c < cid.length; c++) {cidAmounts.push(cid[c][1]);}
  cidAmounts = cidAmounts.reduce(function(a,b){return b + a;}, 0);
  
  // filters
  var change = Math.round((cash - price) * 100) / 100;
  if (cidAmounts < change) {return "Insufficient Funds";}
  else if (cidAmounts == change) {return "Closed";}
  
  // main
  else {
    var newArr = [];
    for (var i = cid.length - 1; i >= 0; i--) {
      var num = 0;
      while (change >= amounts[cid[i][0]] && cid[i][1] > 0) {
        change = Math.round((change - amounts[cid[i][0]]) * 100) / 100;
        cid[i][1] -= amounts[cid[i][0]];
        num += amounts[cid[i][0]];
      }
      if (num > 0) {
        newArr.push([cid[i][0], num]);
      }
    }
    if (change > 0) {
      return "Insufficient Funds";
    } else {
      return newArr;
    }
  }
}

checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);