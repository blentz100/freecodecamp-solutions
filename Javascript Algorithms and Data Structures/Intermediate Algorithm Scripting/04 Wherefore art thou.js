/*Wherefore art thou
Make a function that looks through an array of objects (first argument) and
returns an array of all objects that have matching name and value pairs (second
argument). Each name and value pair of the source object has to be present in
the object from the collection if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, {
first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the
second argument is { last: "Capulet" }, then you must return the third object
from the array (the first argument), because it contains the name and its value,
that was passed on as the second argument.
*/

function whatIsInAName(collection, source) {
  const arr = [];
  let propertyMatchCounter = 0;
  console.log('source is: ' + JSON.stringify(source) + '\n')
  // Only change code below this line
  for(let i = 0; i < collection.length; i++){
    console.log('\ncollection[' + i + '] is: ' + JSON.stringify(collection[i]))
    console.log('Object.keys(collection[i].length is: ' + Object.keys(collection[i]).length);
    //need to iterate over each of the key value pairs in source
    for(let name in source){
      console.log('name is: ' + name)
      console.log('name.value is: ' + source[name]);

      //then check to see if each one is in the collection[i]
      //if yes, then push collection[i] to the soluttion array

      
      if(collection[i].hasOwnProperty(name)){
        console.log('single match!');
        propertyMatchCounter++; 
      }
      if(propertyMatchCounter === Object.keys(collection[i]).length) {
        arr.push(collection[i]);
        console.log('total match');
      }
    }
  }
  return arr;
}

whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1,
"bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 });
