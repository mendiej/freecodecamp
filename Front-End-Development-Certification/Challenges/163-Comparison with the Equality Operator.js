//Comparison with the Equality Operator: https://www.freecodecamp.com/challenges/Comparison-with-the-Equality-Operator

//There are many Comparison Operators in JavaScript. All of these operators return a boolean true or false value. The most basic operator is the equality operator ==. The equality operator compares two values and returns true if they're equivalent or false if they are not. Note that equality is different from assignment (=), which assigns the value at the right of the operator to a variable in the left. If myVal is equal to 10, the equality operator returns true, so the code in the curly braces will execute, and the function will return "Equal". Otherwise, the function will return "Not Equal". In order for JavaScript to compare two different data types (for example, numbers and strings), it must convert one type to another. Once it does, however, it can compare terms as follows: Add the equality operator to the indicated line so that the function will return "Equal" when val is equivalent to 12


// Setup
function testEqual(val) {
  if (val==12) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
testEqual(10);
