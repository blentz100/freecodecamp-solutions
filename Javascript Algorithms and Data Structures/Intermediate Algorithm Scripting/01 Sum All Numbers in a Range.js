/*
 Sum All Numbers in a Range We'll pass you an array of two numbers. Return the
 sum of those two numbers plus the sum of all the numbers between them. The
 lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers
between 1 and 4 (both inclusive) is 10.
*/

function sumAll(arr) {
  let lowNumber = Math.min(arr[0], arr[1])
  let highNumber = Math.max(arr[0], arr[1]);
  let runningTotal = 0;
  for (let i = lowNumber; i <= highNumber; i++ ){
      runningTotal += i;
  }
  return runningTotal;
}

console.log(sumAll([1, 4]));
