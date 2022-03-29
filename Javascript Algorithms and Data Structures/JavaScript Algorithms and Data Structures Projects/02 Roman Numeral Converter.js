/*Roman Numeral Converter Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.
  */


function convertToRoman(num) {
  let ans = "";
  let numArray = num.toString().split("");
  let revArray = numArray.reverse()
  console.log(revArray)

  let thousands = revArray[0];
  let hundreds = revArray[1];
  let tens = revArray[2];
  let ones = revArray[3];

  console.log(hundreds)

  

 return num;
}

convertToRoman(891);
