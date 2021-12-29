/* 
 * Return the lowest index at which a value (second argument) should be inserted
 * into an array (first argument) once it has been sorted. The returned value
 * should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater
than 1 (index 0), but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has
been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and
greater than 5 (index 1).

*/

function getIndexToIns(arr, num) {
  //first sort the array
  //have to do a special sort since JS sorts numbers as strings
  let sortedArray = arr.sort(function(a,b){return a - b}); 


  //then find the index to insert
  for(let i = 0; i <= sortedArray.length; i++){
    if(num < sortedArray[i]){
      return i;
    }
  }
  return sortedArray.length;
}

console.log(getIndexToIns([100, 40,4, 6, 600, 60], 50));



