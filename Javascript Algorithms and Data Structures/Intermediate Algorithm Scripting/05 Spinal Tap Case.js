function spinalCase(str) {

  
  //convert str to array to allow us to splice it
  let strArray = str.split("");

  //iterate over the string and add dashes if the case changes to break it up into words
  for(let i = 0; i < strArray.length - 1; i++){
    let currentLetter = strArray[i];
    let nextLetter = strArray[i+1];

    let currentLetterCase = "";
    let nextLetterCase = "";

    if(currentLetter == currentLetter.toLowerCase()){
      currentLetterCase = 'lower';
    }
    else{
      currentLetterCase = 'upper'
    }
    if(nextLetter == nextLetter.toLowerCase()){
      nextLetterCase = 'lower';
    }
    else{
      nextLetterCase = 'upper'
    }
    //console.log('current letter is: ' + currentLetter + ". and the case is: " + currentLetterCase);
    //console.log('next letter is: ' + nextLetter + ". and the case is: " + nextLetterCase);

    //if current is lower and next is upper, we need to insert a dash
    if(currentLetterCase == "lower" && nextLetterCase == 'upper'){
      console.log('*******')
      console.log('now we need to insert a dash with splice')
      strArray.splice(i+1,0,'-')
      console.log("strArray: " + strArray)
      console.log('*******\n')
      //need to increment i by 1 since we just made the array longer by 1, so we don't cause
      //and infinite loop
      i++
    }
  }
  let solutionStr = strArray.join("");
  console.log('solutionStr is: ' + solutionStr)
  //return str.split(/\/).join("-").toLowerCase();
  return 9999
}

console.log(spinalCase('ThisIsSpinalTap'));

