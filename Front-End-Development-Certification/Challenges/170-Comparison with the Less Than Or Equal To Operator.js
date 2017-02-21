//Comparison with the Less Than Or Equal To Operator: https://www.freecodecamp.com/challenges/Comparison-with-the-Less-Than-Or-Equal-To-Operator

//The less than or equal to operator (<=) compares the values of two numbers. If the number to the left is less than or equal the number to the right, it returns true. If the number on the left is greater than the number on the right, it returns false. Like the equality operator, less than or equal to converts data types. Examples Add the less than or equal to operator to the indicated lines so that the return statements make sense.


function testLessOrEqual(val) {
  if (val<= 12) {  // Change this line
    return "Smaller Than or Equal to 12";
  }
  
  if (val<=24) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "25 or More";
}

// Change this value to test
testLessOrEqual(10);

