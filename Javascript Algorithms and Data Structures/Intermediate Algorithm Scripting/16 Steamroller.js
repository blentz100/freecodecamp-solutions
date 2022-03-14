/*
 * Steamroller
Flatten a nested array. You must account for varying levels of nesting.

*/

function steamrollArray(arr) {
  let flatArr = []
  for(let i = 0; i < arr.length; i++){
    console.log('*top')
    if(typeof arr[i] !== "object"){
      console.log(' element is: ' + arr[i])
      flatArr.push(arr[i]);
      console.log(' flatArr is: ' + flatArr)
    }
    else{
      console.log(' inside else')
      console.log(" " + typeof arr[i] + " is " + arr[i])
      //at this point, we don't want to push an object into the array, we want to go down one level into the object and return that.
      steamrollArray(arr[i]);
      console.log(' flatArr is: ' + flatArr)
    }
    console.log('*bottom \n')
  }
  return flatArr;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
