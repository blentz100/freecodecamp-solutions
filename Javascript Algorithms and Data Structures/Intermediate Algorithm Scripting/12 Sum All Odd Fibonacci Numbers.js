/*
 * Sum All Odd Fibonacci Numbers
Given a positive integer num, return the sum of all odd Fibonacci numbers that
are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional
number in the sequence is the sum of the two previous numbers. The first six
numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less
than or equal to 10 are 1, 1, 3, and 5.
*/

function sumFibs(num) {
  let fiboOne = 1;
  let fiboTwo = 0;
  let runningTotal = 0;
  let fiboThree = 0;
  let previousRunningTotal = 0;
  let fibs = []
  //create a loop to calculuate all the Fibonacci numbers
  for(let i = 1; i <= num +1; i++){
    console.log('*top')
    fiboThree = fiboOne + fiboTwo;

    //inside that loop, keep a running total of the sum of all odd Fibos
    if(fiboThree % 2 == 1){
      previousRunningTotal = runningTotal;
      runningTotal += fiboThree;
      fibs.push(fiboThree)
    }
    console.log('fibs is: ' + fibs)
    console.log('fibonacci Number is: ' + fiboThree);
    console.log('previousRunningTotal: ' + previousRunningTotal);
    console.log('runningTotal is: ' + runningTotal);
    console.log('upper limit is: ' + num)
    //this is the part to make the Fibonacci sequence happen
    fiboOne = fiboTwo;
    fiboTwo = fiboThree;

    console.log('*bottom \n')
    //once we cross over the upper limit, return the next previous highest sum
    if(fiboThree > num){
      console.log('**got inside if**')
      return previousRunningTotal;
    }
  }
  //we need this for the case of 1
  return num;
}
console.log('answer is: ' + sumFibs(4));
