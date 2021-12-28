/*
 * Falsy Bouncer
Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Hint: Try converting each value to a Boolean.
*/
// used !! to convert variable to boolean
// https://www.samanthaming.com/tidbits/19-2-ways-to-convert-to-boolean/
// could also use Boolean(arr[item])


function bouncer(arr) {
  const solutionArr = [];
  for(item in arr){
    if(!!arr[item] == true){

      solutionArr.push(arr[item]);
    }
  }
  return solutionArr;
}

console.log(bouncer([7, "ate", "", false, 9]));
