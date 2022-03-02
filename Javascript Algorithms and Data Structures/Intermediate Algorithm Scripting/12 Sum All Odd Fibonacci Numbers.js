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

//still working on getting the fibonacci sequence correct, I'm missing the
//initial 1 in the sequence
function sumFibs(num) {
  
  
  let fiboOne = 0;
  let fiboTwo = 1;
  let runningTotal = 0;
  let fiboThree = 1;
  //create a loop to calculuate all the Fibonacci numbers
  for(let i = 1; i < 10; i++){
    fiboThree = fiboOne + fiboTwo;
  
    //inside that loop, keep a running total of the sum

    runningTotal += fiboThree;
    console.log('fibonacci Number is: ' + fiboThree);
    console.log('runningTotal is: ' + runningTotal);

    //once we cross over the upper limit, return the next previous highest sum
    fiboOne = fiboTwo;
    fiboTwo = fiboThree;

  }


  return num;
}

sumFibs(4);

