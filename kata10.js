//return which coins to use when need to give change
let calculateChange = function(total, cash) {

  let denom = {};
  let change = cash - total;
  let multiple = 0;

  if (change === 0) {
    return "No change required.";
  }
  if (change > 2000) {
    multiple = Math.floor(change / 2000);
    denom.twentyDollar = multiple;
    change -= 2000 * multiple;
  }
  if (change > 1000) {
    multiple = Math.floor(change / 1000);
    change -= 1000 * multiple;
    denom.tenDollar = multiple;
  }
  if (change > 500) {
    multiple = Math.floor(change / 500);
    change -= 500 * multiple;
    denom.fiveDollar = multiple;
  }
  if (change > 200) {
    multiple = Math.floor(change / 200);
    change -= 200 * multiple;
    denom.twoDollar = multiple;
  }
  if (change > 100) {
    multiple = Math.floor(change / 100);
    change -= 100 * multiple;
    denom.oneDollar = multiple;
  }
  if (change > 25) {
    multiple = Math.floor(change / 25);
    change -= 25 * multiple;
    denom.quarter = multiple;
  }
  if (change > 10) {
    multiple = Math.floor(change / 10);
    change -= 10 * multiple;
    denom.dime = multiple;
  }
  if (change > 5) {
    multiple = Math.floor(change / 5);
    change -= 5 * multiple;
    denom.nickel = multiple;
  }
  if (change > 0) {
    denom.penny = change;
  }
  return denom;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
