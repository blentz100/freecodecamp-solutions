/*
 * Chunky Monkey
Write a function that splits an array (first argument) into groups the length of
size (second argument) and returns them as a two-dimensional array.

*/


function chunkArrayInGroups(arr, size) {
  let newArr = []; 

  for(let i = 0; i < arr.length; ){
    let subArr = [];
    for(j = 0; j < size; j++){
        subArr.push(arr[i]);
        i++;
    }
    newArr.push(subArr);
  }

  
  return newArr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));


