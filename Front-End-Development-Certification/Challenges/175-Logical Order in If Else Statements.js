//Logical Order in If Else Statements: https://www.freecodecamp.com/challenges/Logical-Order-in-If-Else-Statements

//Order is important in if, else if statements. The loop is executed from top to bottom so you will want to be careful of what statement comes first. Take these two functions as an example. Here's the first: And the second just switches the order of the statements: While these two functions look nearly identical if we pass a number to both we get different outputs. Change the order of logic in the function so that it will return the correct statements in all cases.


function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

// Change this value to test
orderMyLogic(7);
