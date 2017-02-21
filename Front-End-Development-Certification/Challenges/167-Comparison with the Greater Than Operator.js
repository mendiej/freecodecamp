//Comparison with the Greater Than Operator: https://www.freecodecamp.com/challenges/Comparison-with-the-Greater-Than-Operator

//The greater than operator (>) compares the values of two numbers. If the number to the left is greater than the number to the right, it returns true. Otherwise, it returns false. Like the equality operator, greater than operator will convert data types of values while comparing. Examples Add the greater than operator to the indicated lines so that the return statements make sense.


function testGreaterThan(val) {
  if (val>100) {  // Change this line
    return "Over 100";
  }
  
  if (val>10) {  // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

// Change this value to test
testGreaterThan(10);
