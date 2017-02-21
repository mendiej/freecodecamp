//Steamroller: https://www.freecodecamp.com/challenges/Steamroller

//Flatten a nested array. You must account for varying levels of nesting. Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

// recursion function
function doArr(arr, flatArray) {
  for (var i = 0; i < arr.length; i++) {
    if (!Array.isArray(arr[i])) {
        flatArray.push(arr[i]);
    } else {
        doArr(arr[i], flatArray);
    }
  }
}

// main
function steamrollArray(arr) {
  var flatArray = [];
  doArr(arr, flatArray);
  return flatArray;
}