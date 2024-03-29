/*
 * Sorted Union
Write a function that takes two or more arrays and returns a new array of unique
values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their
original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array
should not be sorted in numerical order.

Check the assertion tests for examples.
*/

function uniteUnique(arr) {
  console.log("__________");
  console.log('arguments is');
  console.log(arguments);
  let combinedArray = [];
  for(let i = 0; i < arguments.length; i++){
  console.log("** top of outer for loop **\n")
    for(let j = 0; j < arguments[i].length; j++){
      // merge all the arrays together to create one long array
      combinedArray.push(arguments[i][j]);
    }
    console.log("combinedArray is:" + combinedArray)
  console.log("** bottom of outer for loop **\n")
  }
  let tempArray = [];
  //now use a filter method on the merged array to remove duplicates
  //this is probably not the ideal way to use filter but it seems to be working
  let filteredArray = combinedArray.filter(number => {
    if(tempArray.includes(number)){
      console.log("got into if");
      return;
    }
    tempArray.push(number);
    return number;
  });
  return filteredArray;
}
console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]));
