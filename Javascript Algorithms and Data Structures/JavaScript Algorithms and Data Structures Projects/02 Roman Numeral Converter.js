/*Roman Numeral Converter Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.
  */

function convertToRoman(num) {
  let ans = "";
  let numArray = num.toString().split("");
  console.log(numArray)

  let ones = parseInt(numArray.pop(), 10);
  console.log('ones:' + ones)

  let tens = parseInt(numArray.pop(), 10) * 10;
  console.log('tens:' + tens)

  let hundreds = parseInt(numArray.pop(), 10) * 100;
  console.log('hundreds:' + hundreds)

  let thousands = parseInt(numArray.pop(), 10) * 1000;
  console.log('thousands:' + thousands)

  let onesObject = {1: "I", 2: "II", 3: "III", 4: "IV", 5: "V", 6: "VI", 7: "VII", 8: "VIII", 9: "IX"}

  let tensObject = {10: "X", 20: "XX", 30: "XXX", 40: "XL", 50: "L", 6: "LX", 7: "LXX", 8: "LXXX", 9: "XC"}

  let onesFinal = onesObject[ones]
  console.log(onesFinal)

  let tensFinal = tensObject[tens]
  console.log(tensFinal)

  ans = tensFinal + onesFinal;

  

 return ans;
}

console.log(convertToRoman(2));

