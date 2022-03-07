/*
 * Sum All Primes
A prime number is a whole number greater than 1 with exactly two divisors: 1 and
itself. For example, 2 is a prime number because it is only divisible by 1 and
2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers that are less than
or equal to num.
*/

function sumPrimes(num) {
  let iIsPrime = false;

  // print out all primes up to num

  //sum those primes and return it


  for (let i = 2; i < num; i++){
    console.log('*top');
    isIsPrime = true;
    for (j = 2; j <= i; j++){
      if((i % j == 0) && (i !== j)  ){
        console.log(i + ' is not prime');
        iIsPrime = false; 
      }
    }
    console.log( i + '  iIsPrime is: ' + iIsPrime);
  console.log('*bottom\n');
  }
  return num;
}

sumPrimes(10);
