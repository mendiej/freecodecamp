//Sum All Numbers in a Range: https://www.freecodecamp.com/challenges/Sum-All-Numbers-in-a-Range

//We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them. The lowest number will not always come first. Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

function sortNum(a,b) {
  return a - b;
}

function sumAll(arr) {
  arr.sort(sortNum);
  var tot = 0;
  for (var i = arr[0]; i <= arr[1]; i++) {
    tot += i;
  }
  return tot;
}

sumAll([1, 4]);
