/*
 * Use the some Method to Check that Any Elements in an Array Meet a Criteria
The some method works with arrays to check if any element passes a particular test. It returns a Boolean value - true if any of the values meet the criteria, false if not.

For example, the following code would check if any element in the numbers array is less than 10:

const numbers = [10, 50, 8, 220, 110, 11];

numbers.some(function(currentValue) {
  return currentValue < 10;
});
The some method would return true.

Use the some method inside the checkPositive function to check if any element in arr is positive. The function should return a Boolean value.

*/



function checkPositive(arr) {
  // Only change code below this line

  // one option
  /*
  return arr.some(function(number){
    return number > 0;
  })
  */

  //another option
  return arr.some(number => number > 0);

  // Only change code above this line
}

console.log(checkPositive([1, 2, 3, 4, 5]));

