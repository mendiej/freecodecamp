//No repeats please: https://www.freecodecamp.com/challenges/No-repeats-please

//Return the number of total permutations of the provided string that don't have repeated consecutive letters. Assume that all characters in the provided string are each unique. For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating. Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

function permAlone(str) {
  var same = true,
  count = 0;
  str = str.split('');
  
  function swap(a,b) {
    var temp = str[a];
    str[a] = str[b];
    str[b] = temp;
  }
  
  // based on heap's algorithm
  function createPerm(n) {
    if (n == 1) {
        var repeat = false;
        for (var x = 0; x < str.length; x++) {
        if (str[x] == str[x+1]){repeat = true; break;}
      }
      if (!repeat) {count+=1;}
    } else {
        for (var i = 0; i < n; i++) {
        createPerm(n-1);
        if (n % 2 === 0) {swap(i, n-1);}
        else {swap(0, n-1);}
      }
    }
  }
  
  // corner cases
  if (str.length == 1) {return 1;} 
  else {
    for (var i = 0; i < str.length - 1; i++) {
        if (str[i] != str[i+1]) {same = false; break;}
      }
    if (same) {return 0;}
  }
  
  // main
  createPerm(str.length); 
  return count;
}

permAlone('aab');
