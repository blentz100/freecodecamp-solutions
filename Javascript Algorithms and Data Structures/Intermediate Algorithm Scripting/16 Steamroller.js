/*
 * Steamroller
Flatten a nested array. You must account for varying levels of nesting.

*/

let flatArr = [];
function steamrollArray(arr) {
  for(let i = 0; i < arr.length; i++){
    console.log("\n--Top of loop number " + i + ". arr["+i+"] is:" , arr[i])

    //we need to start with our base case
    //is the base case the situation where all elements are not arrays?
    //or is the base case the situation where just the arr[i] is not an array?
    //maybe we just need to solve this first for an array of 1 element and then build from there?

    //Base Case: if arr[i] is not an array, then push it into flattened array
    if(Array.isArray(arr[i]) == false ){
      console.log('\tarr['+i+'] is not an array, so pushing it to flatArr')
      return(arr[i])
      flatArr.push(arr[i])
      console.log('\tflatArr is: ' + flatArr)
    }

   //if arr[i] is an array, then call steamrollArray(arr[i])
    if(Array.isArray(arr[i]) == true ){
        console.log('\tarr['+i+'] is an array, so calling steamrollArray(arr[i])')
        flatArr.push(steamrollArray(arr[i]));
    }
    
    console.log("--Bottom of loop number " + i + "\n")
  }
  console.log('\treturning flatArr and it is: ')
  console.log('\t', flatArr)
  return flatArr;
}

console.log(steamrollArray([[[["a"]]]]));
