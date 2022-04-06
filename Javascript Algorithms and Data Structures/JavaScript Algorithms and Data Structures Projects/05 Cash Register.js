/*
Cash Register
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

Currency Unit	Amount
Penny	$0.01 (PENNY)
Nickel	$0.05 (NICKEL)
Dime	$0.1 (DIME)
Quarter	$0.25 (QUARTER)
Dollar	$1 (ONE)
Five Dollars	$5 (FIVE)
Ten Dollars	$10 (TEN)
Twenty Dollars	$20 (TWENTY)
One-hundred Dollars	$100 (ONE HUNDRED)
See below for an example of a cash-in-drawer array:

[
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]
*/
 function checkCashRegister(price, cash, cid) {
   let change, runningTotal = 0;
   let status = ""
   let updatedCid = cid.reverse();

   // first, determine the total amount of change that needs to be returned
   let changeDue = cash - price;
   console.log("changeDue", changeDue)

   //then we need to add the denominations to the array
   updatedCid[0].push(100)
   updatedCid[1].push(20)
   updatedCid[2].push(10)
   updatedCid[3].push(5)
   updatedCid[4].push(1)
   updatedCid[5].push(.25)
   updatedCid[6].push(.10)
   updatedCid[7].push(.5)
   updatedCid[8].push(.1)
   console.log(updatedCid)

  // loop through cid, starting from the largest denomination to  the smallest and see if you can add up to exactly the change due
   for(let i = 0 ; i < updatedCid.length; i++){
     console.log(updatedCid[i])
     while (updatedCid[i][2] <= changeDue){
       console.log('updatedCid[i][2]', updatedCid[i][2])
       console.log('runningTotal', runningTotal)
       runningTotal += updatedCid[i][2]
       updatedCid[i][2] -= updatedCid[i][2]
       console.log('updatedCid[i][2]', updatedCid[i][2])
       console.log('runningTotal', runningTotal)
     }
   }

   
  
  return 999;
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);

