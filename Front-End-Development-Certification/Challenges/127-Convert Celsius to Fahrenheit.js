//Convert Celsius to Fahrenheit: https://www.freecodecamp.com/challenges/Convert-Celsius-to-Fahrenheit

//To test your learning, you will create a solution "from scratch". Place your code between the indicated lines and it will be tested against multiple test cases. The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32. You are given a variable celsius representing a temperature in Celsius. Use the variable fahrenheit already defined and apply the algorithm to assign it the corresponding temperature in Fahrenheit. NoteDon't worry too much about the function and return statements as they will be covered in future challenges. For now, only use operators that you have already learned.


function convertToF(celsius) {
  var fahrenheit;
  // Only change code below this line
  fahrenheit = (celsius * (9/5)) + 32
  
  // Only change code above this line
  return fahrenheit;
}

// Change the inputs below to test your code
convertToF(30);
