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
  console.log('source is: ' + JSON.stringify(source))
  
  // Iterate over the entire collection that is passed in
  for(let i = 0; i < collection.length; i++){
    console.log('\ncollection[' + i + '] is: ' + JSON.stringify(collection[i]))
    console.log('Object.keys(collection[i].length) is: ' + Object.keys(collection[i]).length);

    //reset property match counter
    propertyMatchCounter = 0;

    //need to iterate over each of the key value pairs in source
    for(let name in source){
      console.log('name is: ' + name)
      console.log('name.value is: ' + source[name]);

      //then check to see if each one is in the collection[i]
      //if yes, then push collection[i] to the soluttion array

      if(collection[i].hasOwnProperty(name) && source[name] == collection[i][name]){
        console.log('we found one match, so increment counter, but we need to keep checking to make sure all match');
        console.log(source[name]);
        console.log(collection[i][name])
        propertyMatchCounter++;
      }

      //this should only fire if all props in source match collection[i]
      // in this example were are getting in here on the collection[1] iteration but shouldn't be
      // the reason is that when we only have one source key/value pair, it can be a false positive
      if(propertyMatchCounter === Object.keys(collection[i]).length) {
        arr.push(collection[i]);
        console.log('FULL MATCH!');
      }
      
    }
  }
  return arr;
}

console.log(whatIsInAName([
  { "apple": 1, "bat": 2 }, 
  { "bat": 2 }, 
  { "apple": 1, "bat": 2, "cookie": 2 }], 
  
  { "apple": 1, "bat": 2 }));


