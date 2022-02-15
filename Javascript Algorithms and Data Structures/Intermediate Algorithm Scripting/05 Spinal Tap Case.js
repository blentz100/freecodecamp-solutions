function spinalCase(str) {

  //iterate over the string and add dashes if the case changes to break it up into words
  let solutionStr = str;
  let upperLimit = str.length;

  for(let i = 0; i < upperLimit; i++){
    let currentLetter = str[i];
    let nextLetter = str[i+1];

    let currentLetterCase = "";
    let nextLetterCase = "";

    if(str[i] == str[i].toLowerCase()){
      currentLetterCase = 'lower';
    }
    else{
      currentLetterCase = 'upper'
    }

    if(str[i+1] == str[i+1].toLowerCase()){
      nextLetterCase = 'lower';
    }
    else{
      nextLetterCase = 'upper'
    }

    //if current is lower and next is upper, we need to insert a dash
    if(currentLetterCase == "lower" && nextLetterCase == 'upper'){
      //this part is working correctly
      console.log('\nnow we need to insert a dash because:')
      console.log('currentLetter is: ' + currentLetter + '  nextLetter is: ' + nextLetter)
      i++

      //the slicing is not working right after the first iteration
      //maybe splicing is the better solution?
      console.log(solutionStr.slice(0,i))
      console.log(str.slice(i))
      solutionStr = solutionStr.slice(0,i) + "-" + str.slice(i);
     
      console.log('*******')
      console.log('solutionStr is: ' + solutionStr)
      console.log('*******')
    }

  }
  //return str.split(/\/).join("-").toLowerCase();
  return 9999
}

console.log(spinalCase('ThisIsSpinalTap'));

