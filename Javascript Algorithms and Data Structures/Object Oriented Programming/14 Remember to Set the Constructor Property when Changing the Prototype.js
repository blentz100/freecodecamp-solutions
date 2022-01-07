/*
 * Remember to Set the Constructor Property when Changing the Prototype There is
one crucial side effect of manually setting the prototype to a new object. It
erases the constructor property! This property can be used to check which
constructor function created the instance, but since the property has been
overwritten, it now gives false results:

duck.constructor === Bird; duck.constructor === Object; duck instanceof Bird; In
order, these expressions would evaluate to false, true, and true.

To fix this, whenever a prototype is manually set to a new object, remember to
define the constructor property:

Bird.prototype = { constructor: Bird, numLegs: 2, eat: function() {
  console.log("nom nom nom"); }, describe: function() { console.log("My name is
    " + this.name); } }; Define the constructor property on the Dog prototype.
*/ 

function Dog(name) {
  this.name = name;
}

// Only change code below this line
Dog.prototype = {
  constructor: Dog,
  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};

//some testing below to see the effect of adding the constructor to the prototype
let myDog = new Dog("rover");
console.log(myDog.constructor === Dog);
console.log(myDog.constructor === Object);
console.log(myDog instanceof Dog);

