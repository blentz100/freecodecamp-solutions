/*
 * Smallest Common Multiple
Find the smallest common multiple of the provided parameters that can be evenly
divided by both, as well as by all sequential numbers in the range between these
parameters.

The range will be an array of two numbers that will not necessarily be in
numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3
that is also evenly divisible by all numbers between 1 and 3. The answer here
would be 6.

*/

function smallestCommons(arr) {
  let lowNum = arr[0];
  let highNum = arr[1];

  // first we need to put the incoming array in order
  let sortedArray = arr.sort(function(a, b){return a-b})
  console.log(sortedArray);

  // come up with an algorithm for finding the multiples of two given numbers
  // first
 
  for(let i = 0; i < 15; i++){
    let commonMultiple = 0;
    // first divide highNum by lowNum and if modoluo is 0, then it's a hit 

  }

  // then add a helper function that returns true if all the intermediate
  // numbers are evenly divisible by the multiple, as soon as that returns TRU
  // we have found the solution
  return arr;
}
smallestCommons([3,6]);

