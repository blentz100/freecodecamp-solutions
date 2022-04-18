/*
 * Steamroller
Flatten a nested array. You must account for varying levels of nesting.

*/

let flatArr = [];

function steamrollArray(arr) {

  //this was my start a recursive solution but couldn't get it working
  /*
  for(let i = 0; i < arr.length; i++){
    console.log("--    top of loop number " + i)
    console.log("arr["+i+"] is:" , arr[i])
    //if arr[i] !== object, then push it into flattened array
    if(typeof arr[i] !== "object" ){
      console.log('arr['+i+'] is not an object, so pushing it to flatArr')
      flatArr.push(arr[i])
      console.log('flatArr is: ' + flatArr)
    }
    //if arr[i] == object, then we need to go one level down somehow
    if(typeof arr[i] == "object"){
        console.log('arr['+i+'] is an object, so calling steamrollArray(arr[i])')
        steamrollArray(arr[i]);
    }
    console.log("-- bottom of loop number " + i + "\n")
  }
  console.log('return flatArr')
  return flatArr;
  */

  //this solution below works
  console.log('arr is: ', arr)

  let testArr = Array.from(arguments);
  console.log('testArr is: ', testArr)
  let testAnswer = testArr.join()
  console.log('testAnswer is: ', testAnswer)

  let testAnswer2 = testAnswer.split(",")
  console.log('testAnswer2 is: ', testAnswer2)

  let finalAnswer = [];
  //loop through the whole testAnswer2, if we see numbers, convert them to integers
  for(let i = 0; i < testAnswer2.length; i++){
    
    // case for numbers
    if(testAnswer2[i].charCodeAt() >= 48 && testAnswer2[i].charCodeAt() <= 58) {
      finalAnswer.push(parseInt(testAnswer2[i], 10))
    }

    // add a case for characters here like a and b
      if(testAnswer2[i].charCodeAt() >= 97 && testAnswer2[i].charCodeAt() <= 122) {
      finalAnswer.push(testAnswer2[i])
    }
    
    // add a case for the empty array(don't think this is needed)
    
    // add a case for the empty object 
    if(testAnswer2[i].charCodeAt() == 91) {
      finalAnswer.push({})
    }
  }
  console.log('finalAnswer is: ', finalAnswer)

  return finalAnswer;
  
}

console.log(steamrollArray([1, {}, [3, [[4]]]]));
console.log('\n')


