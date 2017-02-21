//Symmetric Difference: https://www.freecodecamp.com/challenges/Symmetric-Difference

//Create a function that takes two or more arrays and returns an array of the symmetric difference (△ or ⊕) of the provided arrays. Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), the mathematical term "symmetric difference" of two sets is the set of elements which are in either of the two sets, but not in both (A △ B = C = {1, 4}). For every additional symmetric difference you take (say on a set D = {2, 3}), you should get the set with elements which are in either of the two the sets but not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}). Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

function compareArrays(a,b) {
    var newTemp = [];
    for (var i = 0; i < a.length; i++) {
    if (b.indexOf(a[i]) == -1 && newTemp.indexOf(a[i]) == -1) {newTemp.push(a[i]);}
  }
  for (var j = 0; j < b.length; j++) {
    if (a.indexOf(b[j]) == -1 && newTemp.indexOf(b[j]) == -1) {newTemp.push(b[j]);}
  }
  return newTemp;
}

function sym(args) {
    var allArrays = Array.from(arguments);
  var newArray = [];
  newArray = compareArrays(allArrays[0], allArrays[1]);
  
  if (allArrays.length > 2) {
    allArrays.splice(0,2);
    while (allArrays.length > 0) {
        newArray = compareArrays(allArrays[0], newArray);
      allArrays.splice(0,1);
    }
  }
  return newArray;
}
sym([1, 2, 3], [5, 2, 1, 4]);
