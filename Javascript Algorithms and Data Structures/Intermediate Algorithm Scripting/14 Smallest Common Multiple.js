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
  let firstNum = arr[0];
  let secondNum = arr[1];

  // first we need to put the incoming array in order
  let sortedArray = arr.sort(function(a, b){return a-b})
  console.log(sortedArray);

  //this for loop will print out the multiples of the two numbers, in order 
  let j = 1;
  let k = 1;
  for(let i = 1; i < 15; i++){
    if(firstNum * j < secondNum * k){
      console.log(firstNum *j)
      j++
    }
    else{
      console.log(secondNum * k)
      k++
    }
  }

  // next assign each one to a variable, and see if it's divisible by both each
  // time through the for loop, if it is, it's a match


  // then add a helper function that returns true if all the intermediate
  // numbers are evenly divisible by the multiple, as soon as that returns TRU
  // we have found the solution
  return arr;
}
smallestCommons([3,7]);

