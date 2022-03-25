/*
 * Steamroller
Flatten a nested array. You must account for varying levels of nesting.

*/

function steamrollArray(arr) {
let flatArr = [];
  for(let i = 0; i < arr.length; i++){
    console.log("--    top of loop number " + i)
    console.log("arr[i] is:" , arr[i])
    //if arr[i] !== object, then push it into flattened array
    if(typeof arr[i] !== "object" ){
      console.log('arr[i] is not an object, so pushing it to flatArr')
      flatArr.push(arr[i])
    }

    //if arr[i] == object, then we need to go one level down somehow
      if(typeof arr[i] == "object"){
        console.log('arr[i] is an object')
        steamrollArray(arr[i])
      }
  


    console.log("-- bottom of loop number " + i + "\n")
  }
  
  return flatArr;
}

console.log(steamrollArray([1,[2]]));
