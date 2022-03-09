/*
 * Sum All Primes
A prime number is a whole number greater than 1 with exactly two divisors: 1 and
itself. For example, 2 is a prime number because it is only divisible by 1 and
2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers that are less than
or equal to num.
*/

function sumPrimes(num) {
  // print out all primes up to num
  //sum those primes and return it
  let primeTestCounter = 0;
  let sumOfPrimes = 0;

  for (let i = 2; i <= num; i++){
    //console.log('*top');
    primeTestCounter = 0; 
    for (let j = 1; j <= i; j++){
      //console.log(i + " % " + j + " == " + (i % j))
      if(i % j == 0 ){
        /* console.log(i + " % " + j + " == true" );
        console.log(i + ' fails this prime test'); */
        primeTestCounter++; 
      }
    }
    if(primeTestCounter == 2){
      console.log(i); 
      sumOfPrimes += i;
    }
      //console.log('*bottom\n');
  }
  return sumOfPrimes;
}

console.log(sumPrimes(977));
