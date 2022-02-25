/*
 * https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/mutations
Mutations Return true if the string in the first element of the array contains
all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters
in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string hello does
not contain a y.

Lastly, ["Alien", "line"], should return true because all of the letters in line
are present in Alien.
*/

//function definition
function mutation(arr) {

  let firstWord = arr[0].toLowerCase();
  let secondWord = arr[1].toLowerCase();

  //we need to loop through all the letters of the second word
  for(let i = 0; i < secondWord.length; i++ ){
    console.log('i is: ' + i)
    console.log('secondWord[' + i + '] is: ' + secondWord[i]);
    
    //we need to check and see if each letter
    //is present in the first word, it can be
    //in any position in the first word
    if( firstWord.indexOf(secondWord[i]) != -1){
      console.log("found match", firstWord[i], secondWord[i])
      
    }
    else{
      return false;
    }
    console.log(" ")
  }
  return true;
}
//calling the function
console.log(mutation(["hello", "Hello"]));
