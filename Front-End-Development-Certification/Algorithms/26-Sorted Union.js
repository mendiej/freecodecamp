//Sorted Union: https://www.freecodecamp.com/challenges/Sorted-Union

//Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays. In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array. The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order. Check the assertion tests for examples. Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.


function uniteUnique(arr) {
  var newArr = [];
  
  for (var i = 0; i < arguments.length; i++) {
    for (var j = 0; j < arguments[i].length; j++) {
      if (newArr.indexOf(arguments[i][j])== -1) {
          newArr.push(arguments[i][j]);
      }
    }
  }
  
  return newArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
