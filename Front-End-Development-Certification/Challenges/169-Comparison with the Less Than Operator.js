//Comparison with the Less Than Operator: https://www.freecodecamp.com/challenges/Comparison-with-the-Less-Than-Operator

//The less than operator (<) compares the values of two numbers. If the number to the left is less than the number to the right, it returns true. Otherwise, it returns false. Like the equality operator, less than operator converts data types while comparing. Examples Add the less than operator to the indicated lines so that the return statements make sense.


function testLessThan(val) {
  if (val<25) {  // Change this line
    return "Under 25";
  }
  
  if (val<55) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

// Change this value to test
testLessThan(10);
