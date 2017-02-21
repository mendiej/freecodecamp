//Drop it: https://www.freecodecamp.com/challenges/Drop-it

//Drop the elements of an array (first argument), starting from the front, until the predicate (second argument) returns true. The second argument, func, is a function you'll use to test the first elements of the array to decide if you should drop it or not. Return the rest of the array, otherwise return an empty array. Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

function dropElements(arr, func) {
  // Drop them elements.
  while (!func(arr[0])) {
    arr.splice(0,1);
  }
  return arr;
}