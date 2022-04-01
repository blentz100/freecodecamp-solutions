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

  let onesObject = {0: "", 1: "I", 2: "II", 3: "III", 4: "IV", 5: "V", 6: "VI", 7: "VII", 8: "VIII", 9: "IX"}

  let tensObject = {0: "", 10: "X", 20: "XX", 30: "XXX", 40: "XL", 50: "L", 60: "LX", 70: "LXX", 80: "LXXX", 90: "XC"}

  let hundredsObject = {0: "", 100: "C", 200: "CC", 300: "CCC", 400: "CD", 500: "D", 600: "DC", 700: "DCC", 800: "DCCC", 900: "CM"}

  let thousandsObject = {0: "", 1000: "M", 2000: "MM", 3000: "MMM", 4000: "MV", 5000: "V", 6000: "VM", 7000: "VMM", 8000: "VMMM", 9000: "MX"}

  let onesFinal = onesObject[ones]
  console.log('onesFinal', onesFinal)

  let tensFinal = tensObject[tens]
  console.log('tensFinal', tensFinal)

  let hundredsFinal = hundredsObject[hundreds]
  console.log('hundredsFinal', hundredsFinal)

  let thousandsFinal = thousandsObject[thousands]
  console.log('thousandsFinal', thousandsFinal)

  ans = thousandsFinal + hundredsFinal + tensFinal + onesFinal;

  let finalAnswer = ans.replace(/undefined/, "");
  let finalFinalAnswer = finalAnswer.replace(/NaN/, "");

  return finalFinalAnswer;
}

console.log(convertToRoman(2));

