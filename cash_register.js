//Solution for Cash Register  Jose Eduardo Diaz Morales

function checkCashRegister(price, cash, cid) {
    const currencyUnit = {
      "PENNY": .01,
      "NICKEL": .05,
      "DIME": .1,
      "QUARTER": .25,
      "ONE": 1,
      "FIVE": 5,
      "TEN": 10,
      "TWENTY": 20,
      "ONE HUNDRED": 100
    }
    let change = cash - price;
    
    let totalCid = cid.reduce((acc, curr) => acc + curr[1], 0.0);
    
    if(totalCid < change) {
      return {status: "INSUFFICIENT_FUNDS", change: []};
    } else if(totalCid === change) {
      return {status: "CLOSED", change: cid};
    } else {
      let changeArr = cid.reduceRight((acc, curr) => {
        let value = 0;
        while(currencyUnit[curr[0]] <= change && curr[1] >= currencyUnit[curr[0]]) {
          change -= currencyUnit[curr[0]];
          change = Math.round(change * 100) / 100;
          curr[1] -= currencyUnit[curr[0]];
          value += currencyUnit[curr[0]];
        }
        if(value) acc.push([curr[0], value]);
        return acc;
      }, []);
      if(changeArr.length < 1 || change > 0) {
        return {status: "INSUFFICIENT_FUNDS", change: []};
      }
      return {status: "OPEN", change: changeArr};
    }
}
