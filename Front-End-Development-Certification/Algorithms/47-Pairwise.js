//Pairwise: https://www.freecodecamp.com/challenges/Pairwise

//Given an array arr, find element pairs whose sum equal the second argument arg and return the sum of their indices. If multiple pairs are possible that have the same numeric elements but different indices, return the smallest sum of indices. Once an element has been used, it cannot be reused to pair with another. For example pairwise([7, 9, 11, 13, 15], 20) returns 6. The pairs that sum to 20 are [7, 13] and [9, 11]. We can then write out the array with their indices and values. Below we'll take their corresponding indices and add them. 7 + 13 = 20 → Indices 0 + 3 = 39 + 11 = 20 → Indices 1 + 2 = 33 + 3 = 6 → Return 6 Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

function pairwise(arr, arg) {
    var value = 0, ind = [];
  
  for (var i = 0; i < arr.length; i++) {
    for (var j = i+1; j < arr.length; j++) {
      if (arr[i] + arr[j] == arg && ind.indexOf(i) == -1 && ind.indexOf(j) == -1) {
        ind.push(i);ind.push(j);
        value += i+j;}
    }
  }
  return value;
}

pairwise([1,4,2,3,0,5], 7);