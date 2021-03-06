//Finders Keepers: https://www.freecodecamp.com/challenges/Finders-Keepers

//Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument). Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.


function findElement(arr, func) {
  return arr.filter(func)[0];
}

findElement([1, 3, 5, 8, 9, 10], function(num){ return num % 2 === 0; });
