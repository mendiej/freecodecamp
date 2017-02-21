//Return Early Pattern for Functions: https://www.freecodecamp.com/challenges/Return-Early-Pattern-for-Functions

//When a return statement is reached, the execution of the current function stops and control returns to the calling location. Example The above outputs "Hello" to the console, returns "World", but "byebye" is never output, because the function exits at the return statement. Modify the function abTest so that if a or b are less than 0 the function will immediately exit with a value of undefined. HintRemember that undefined is a keyword, not a string.


// Setup
function abTest(a, b) {
  // Only change code below this line
  if (a<0||b<0) {
    return undefined
  }
  
  
  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

// Change values below to test your code
abTest(2,2);