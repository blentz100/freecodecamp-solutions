/*
 * Binary Agents
Return an English translated sentence of the passed binary string.

The binary string will be space separated.
*/





function binaryAgent(str) {
   
  //convert string to array
  let array = str.split(" ")

  //map each string element to a decimal number
  let mappedArray = array.map(element => parseInt(element, 2))

  //map each element in array to it's utf character
  let characterArray = mappedArray.map(element => String.fromCharCode(element))
  console.log(characterArray)

  //join array back to string
  return characterArray.join(""); }

console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));
