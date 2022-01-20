/*
 * Implement map on a Prototype
As you have seen from applying Array.prototype.map(), or simply map() earlier,
the map method returns an array of the same length as the one it was called on.
It also doesn't alter the original array, as long as its callback function
doesn't.

In other words, map is a pure function, and its output depends solely on its
inputs. Plus, it takes another function as its argument.

You might learn a lot about the map method if you implement your own version of
it. It is recommended you use a for loop or Array.prototype.forEach().

Write your own Array.prototype.myMap(), which should behave exactly like
Array.prototype.map(). You should not use the built-in map method. The Array
instance can be accessed in the myMap method using this.

*/

// The global variable
const s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  const newArray = [];
  // Only change code below this line
  console.log("inside Array.prototype.myMap");
  console.log("callback is: " + callback)
  console.log("typeof callback is: " + typeof callback)
  console.log("this is: " + this)
  console.log("typeof this is: " + typeof this);

  for(let i = 0; i < this.length; i++){
    console.log('inside for loop');
    newArray[i] = callback(this[i]);
  }

  // Only change code above this line
  return newArray;
};

const new_s = s.myMap(function(item) {
  return item * 2;
});

console.log('new_s is: ' + new_s);


