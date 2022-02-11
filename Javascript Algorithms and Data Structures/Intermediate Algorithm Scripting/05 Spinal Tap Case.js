/*Spinal Tap Case
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
*/




function spinalCase(str) {

  //iterate over the string and add dashes if the case changes to break it up into words

  for(let i = 0; i < str.length; i++){
    let currentLetterCase = "";
    if(str[i] == str[i].toLowerCase()){
      currentLetterCase = 'lower';
    }
    else{
      currentLetterCase = 'upper'
    }
    console.log('current letter is: ' + str[i] + ". and the case is: " + currentLetterCase);

    //using this same logic, check the case of the next letter
    //if there is a mismatch, insert a dash or space
    
  


  }
  //return str.split(/\/).join("-").toLowerCase();
  return 9999
}

console.log(spinalCase('ThisIsSpinalTap'));
