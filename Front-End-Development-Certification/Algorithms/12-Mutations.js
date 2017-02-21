//Mutations: https://www.freecodecamp.com/challenges/Mutations

//Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array. For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case. The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y". Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien". Remember to use Read-Search-Ask if you get stuck. Write your own code.


function mutation(arr) {
  var total = 0;
  
  for (var i = 0; i < arr[1].length; i++) {
    if (arr[0].toLowerCase().indexOf(arr[1].toLowerCase()[i]) >= 0) {
      total += 1;
    }
  }
  
  if (total == arr[1].length) {
    return true;
  } else {
    return false;
  }
}

mutation(["hello", "hey"]);
