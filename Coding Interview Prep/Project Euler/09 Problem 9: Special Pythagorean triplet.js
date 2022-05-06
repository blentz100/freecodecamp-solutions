/*
Problem 9: Special Pythagorean triplet
A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a2 + b2 = c2
For example, 32 + 42 = 9 + 16 = 25 = 52.

There exists exactly one Pythagorean triplet for which a + b + c = 1000. Find the product abc such that a + b + c = n.

*/ 

function specialPythagoreanTriplet(n) {
 let sumOfabc = n;

  for(let a = 1; a < n; a++){
    for(let b = a + 1; b < n; b++){
      for(let c = b +1; c < n; c++){
        if(Math.pow(a,2) + Math.pow(b,2) == Math.pow(c,2) && (a + b + c == sumOfabc)){
          console.log("Match",a,b,c)
          console.log("a*b*c: ", a*b*c)
          console.log("a+b+c:", a+b+c)
          return a*b*c
        }
      }
    }
  }
}
console.log(specialPythagoreanTriplet(24));

