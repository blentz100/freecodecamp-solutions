/*
 * Use a Constructor to Create Objects
Here's the Bird constructor from the previous challenge:

function Bird() {
  this.name = "Albert";
  this.color  = "blue";
  this.numLegs = 2;
}

let blueBird = new Bird();
NOTE: this inside the constructor always refers to the object being created.

Notice that the new operator is used when calling a constructor. This tells JavaScript to create a new instance of Bird called blueBird. Without the new operator, this inside the constructor would not point to the newly created object, giving unexpected results. Now blueBird has all the properties defined inside the Bird constructor:

blueBird.name;
blueBird.color;
blueBird.numLegs;
Just like any other object, its properties can be accessed and modified:

blueBird.name = 'Elvira';
blueBird.name;
Use the Dog constructor from the last lesson to create a new instance of Dog, assigning it to a variable hound.
*/

//Getting a warning/hint that the constructor function may be converted to a
//class declaration
//This is most likely because classes were introduced in JS in ES6
//but leaving this like it is because it's part of the tutorial
//further reading: https://dev.to/salyadav/re-introducing-javascript-objects-2-h63


function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}
// Only change code below this line

let hound = new Dog();
console.log(hound)
console.log(hound.name)
console.log(hound.color)
console.log(hound.numLegs)
