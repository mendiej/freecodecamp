//Repeat a string repeat a string: https://www.freecodecamp.com/challenges/Repeat-a-string-repeat-a-string

//Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number. Remember to use Read-Search-Ask if you get stuck. Write your own code.


function repeatStringNumTimes(str, num) {
  
  var newString = '';
  
  if (num < 1) {
    return newString;
  } else {
    for (var i=0; i<num; i++) {
      newString += str;
    }
  }  
  return newString;
}

repeatStringNumTimes("*", 3);
