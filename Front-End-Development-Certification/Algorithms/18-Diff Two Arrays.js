//Diff Two Arrays: https://www.freecodecamp.com/challenges/Diff-Two-Arrays

//Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays. Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.


function diffArray(arr1, arr2) {
  var newArr = [];
  for (var i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) == -1) {newArr.push(arr1[i]);}
  }
  for (var j = 0; j < arr2.length; j++) {
    if (arr1.indexOf(arr2[j]) == -1) {newArr.push(arr2[j]);}
  }
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
