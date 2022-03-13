/*
 * Steamroller
Flatten a nested array. You must account for varying levels of nesting.

*/

function steamrollArray(arr) {
  let flatArr = []
  for(let i = 0; i < arr.length; i++){
    flatArr.push(steamrollArray[arr[i]])
    console.log('*top')
    if(typeof arr[i] == "object"){
      console.log(' obj')
      flatArr.push(steamrollArray(arr[i]))
    }
    else{
      console.log(typeof arr[i] + " " + arr[i])
      return flatArr.push(arr[i]);
    }
    console.log('*bottom \n')
  }
  return flatArr
}
console.log(steamrollArray([1, [2], [3, [[4]]]]));
