/*
 * Chunky Monkey
Write a function that splits an array (first argument) into groups the length of
size (second argument) and returns them as a two-dimensional array.

*/
//probably could use some refactoring, but it passes all test cases

function chunkArrayInGroups(arr, size) {
  let newArr = [];

  for(let i = 0; i < arr.length; ){
    let subArr = [];
    for(let j = 0; j < size; j++){
        if(arr[i] !== undefined){
          subArr.push(arr[i]);
        }
        i++;
    }
    newArr.push(subArr);
  }


  return newArr;
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));

