//Arguments Optional: https://www.freecodecamp.com/challenges/Arguments-Optional

//Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum. For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function. Calling this returned function with a single argument will then return the sum: var sumTwoAnd = addTogether(2); sumTwoAnd(3) returns 5. If either argument isn't a valid number, return undefined. Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

function checkNum(num){
  for (var i = 0; i < num.length; i++) {
    if (Number.isInteger(num[i])) {continue;}
    else {return false;}
  }
  return true;
}  

function addTogether() {
    var args = Array.from(arguments);
  if (!checkNum(args)) {return undefined;}
  if (args.length > 1) {return args[0] + args[1];}
  
  function nextTry(x) {
    if (Array.isArray(x)) {return undefined}
    else if (checkNum(x)) {return x + 2;}
    else {return undefined;}
  }
  return nextTry;
}