//Smallest Common Multiple: https://www.freecodecamp.com/challenges/Smallest-Common-Multiple

//Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters. The range will be an array of two numbers that will not necessarily be in numerical order. e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3. Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

function checkDiv(arr, check) {
  for (var i = arr[arr.length - 1] - 1; i >= arr[0]; i--) {
    if (check % i !== 0){
      return false;
    }
  }
  return true;
}

function smallestCommons(arr) {
  // sort largest last
  arr.sort(function(a,b){return a-b;});
  var nom = arr[arr.length - 1];
  var num = 1;
  
  while (!checkDiv(arr, nom*num)) {
    num += 1;
  }
  
  return nom*num;
}


smallestCommons([1,5]);
