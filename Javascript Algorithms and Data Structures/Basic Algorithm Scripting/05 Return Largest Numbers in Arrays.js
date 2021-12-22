/*Return Largest Numbers in Arrays
Return an array consisting of the largest number from each provided sub-array.
For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access
each member with array syntax arr[i].

*/

function largestOfFour(arr) {
  let solutionArray = arr.map(group => group.reduce( (largest, current) => {
    return Math.max(largest,current)}, group[0]));;
  return solutionArray;

}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

//this test case gave me problems because the very last array had all negative
//numbers, and that didn't seem to work with the original algorithm I wrote.
//to solve it, had to change the initial value from 0 to group[0]
//I discovered I could solve the problem by hardcoding this value to -100 at
//first, and then figure out I could just use the value of the first element in
//the array so it will work for any input
console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));
