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

  let combinedArray = [];

  for(let i = 0; i < arr.length; i++){
    console.log('** top of outer for loop ** ')

    for(let j = 0; j < arguments[i].length; j++){
      console.log("\t * top of inner for loop *"); 
      // merge all the arrays together to create one long array
      combinedArray.push(arguments[i][j]);
      console.log("\t * bottom of inner for loop *"); 
    }
    console.log("combinedArray is:" + combinedArray)
  console.log("** bottom of outer for loop **\n")
  }

  //now use a filter method on the merged array to remove duplicates
  //let filteredArray = combinedArray....

  return 99999;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
