/*
 * Use Prototype Properties to Reduce Duplicate Code
Since numLegs will probably have the same value for all instances of Bird, you
essentially have a duplicated variable numLegs inside each Bird instance.

This may not be an issue when there are only two instances, but imagine if there
are millions of instances. That would be a lot of duplicated variables.

A better way is to use the prototype of Bird. Properties in the prototype are
shared among ALL instances of Bird. Here's how to add numLegs to the Bird
prototype:

Bird.prototype.numLegs = 2; Now all instances of Bird have the numLegs property.

console.log(duck.numLegs); console.log(canary.numLegs); Since all instances
automatically have the properties on the prototype, think of a prototype as a
"recipe" for creating objects. Note that the prototype for duck and canary is
part of the Bird constructor as Bird.prototype. Nearly every object in
  JavaScript has a prototype property which is part of the constructor function
that created it.

Add a numLegs property to the prototype of Dog
*/

function Dog(name) {
  this.name = name;
}



// Only change code above this line
Dog.prototype.numLegs = 4;
let beagle = new Dog("Snoopy");

//not sure why this console.log doesn't also print out numLegs but it passes
//the tests
console.log(beagle);
