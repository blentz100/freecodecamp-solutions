/*
 * Arguments Optional
Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);
sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.
*/

// https://javascript.info/new-function
// https://javascript.info/currying-partials

function addTogether() {
  console.log("arguments.length is: " + arguments.length)
  if(arguments.length == 2){
    console.log('got in the if')
    return (arguments[0] + arguments[1])
  }
  else{
    console.log('got in the else....')
    return (function(firstNum){
      console.log('got in the else')
      console.log('arguments[0] is: ' + arguments[0])
      console.log('firstNum is: ' + firstNum)
      return firstNum;
    })
  }
  
}

console.log(addTogether(5)(7));
