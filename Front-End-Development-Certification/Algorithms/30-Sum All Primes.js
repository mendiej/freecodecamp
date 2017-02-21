//Sum All Primes: https://www.freecodecamp.com/challenges/Sum-All-Primes

//Sum all the prime numbers up to and including the provided number. A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two. The provided number may not be a prime. Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

function sumPrimes(num) {
  // full array
  var newArray = [];
  for (var i = 2; i <= num; i++) {
    newArray.push(i);
  }
  
  // isolate primes
  for (var x = 0; x < newArray.length; x++) {
    for (var y = (x+1); y < newArray.length; y++) {
        if (newArray[y] % newArray[x] === 0) {
        newArray.splice(y, 1);
      }
    }
  }
  
  // return sum
  return newArray.reduce(function(a,b){return a+b;});
}

sumPrimes(977);