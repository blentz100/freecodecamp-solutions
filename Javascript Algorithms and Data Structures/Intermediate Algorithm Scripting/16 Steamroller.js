/*
 * Steamroller
Flatten a nested array. You must account for varying levels of nesting.

*/
let flatArr = [];
function steamrollArray(arr) {
  for(let i = 0; i < arr.length; i++){
    console.log("\n--Top of loop number " + i + ". arr["+i+"] is:" , arr[i])
    
    //if arr[i] is not an array, then push it into flattened array
    if(Array.isArray(arr[i]) == false ){
      console.log('\tarr['+i+'] is not an array, so pushing it to flatArr')
      flatArr.push(arr[i])
      console.log('\tflatArr is: ' + flatArr)
    }
    if(Array.isArray(arr[i]) == true ){
        console.log('\tarr['+i+'] is an array, so calling steamrollArray(arr[i])')
        flatArr.push(steamrollArray(arr[i]));
    }
    console.log("--Bottom of loop number " + i + "\n")
  }
  console.log('\treturning flatArr')
  return flatArr;
}

console.log(steamrollArray([[[[["a"]]]]], [["b"]]));

