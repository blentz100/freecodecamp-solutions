/*
 * Missing letters
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
*/

function fearNotLetter(str) {

  //will need a for loop to iterate over the list
  for(let i = 0; i < str.length - 1; i++){
    
    //at each iteration, convert the letter into it's code number
    console.log(str[i].charCodeAt());
    
    //then check to see if that number is missing, if it is, return it
    if(str[i+1].charCodeAt() - str[i].charCodeAt() > 1){
      console.log(str[i].charCodeAt() + 1)
      let solutionCode = str[i].charCodeAt() + 1
      return String.fromCharCode(solutionCode)
    }
  }
  //only get here if there is no letter missing
  return undefined;
}

fearNotLetter("abce");
