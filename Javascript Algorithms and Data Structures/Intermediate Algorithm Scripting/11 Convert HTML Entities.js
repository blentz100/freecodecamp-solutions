/*
 * Convert HTML Entities
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a
string to their corresponding HTML entities.
*/

function convertHTML(str) {
  let answerArray = [];
  //convert string to an array, split it on each character
  let newArray = str.split("")
 
  //loop through the array, checking for special characters
  for(let i = 0; i < newArray.length; i++){
    //check each character, replace it with it's symbol if it's a special char
    //otherwise just push it to the answerArray
    switch(newArray[i]){
      case "&" :
        answerArray.push("&amp;")
        break;
      default:
        answerArray.push(newArray[i]);
        break;   
    }
  }
  return answerArray.join("");
}

console.log(convertHTML("Dolce & Gabbana"));
