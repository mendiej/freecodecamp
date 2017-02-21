//Factorialize a Number: https://www.freecodecamp.com/challenges/Factorialize-a-Number

//Return the factorial of the provided integer. If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n. Factorials are often represented with the shorthand notation n! For example: 5! = 1 * 2 * 3 * 4 * 5 = 120 Remember to use Read-Search-Ask if you get stuck. Write your own code.


function factorialize(num) {
  
  if (num == 0) {
    return 1;
  }
  
  var multiply = num - 1;
  
  while (multiply > 1) {
    num *= multiply;
    multiply --;
  }
  return num;
}

factorialize(5);
