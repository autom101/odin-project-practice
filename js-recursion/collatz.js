//Collatz conjecture:
/* 
You can always "get back to 1" by following the following steps:
    - If n is 1, stop
    - If n is even, repeat this process on n/2
    - If n is odd, repeat this process on 3n + 1
*/

//Goal: Claculate the number of steps it takes to get back to 1

const collatz = (number) => {
  if (number === 1) {
    return 0;
  } else if (number % 2 === 0) {
    return collatz(number / 2) + 1;
  } else if (number % 2 !== 0) {
    return collatz(3 * number + 1) + 1;
  }
};

console.log(collatz(69));
