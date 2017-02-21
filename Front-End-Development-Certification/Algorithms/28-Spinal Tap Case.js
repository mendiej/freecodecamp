//Spinal Tap Case: https://www.freecodecamp.com/challenges/Spinal-Tap-Case

//Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes. Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.


function spinalCase(str) {
  str = str.replace(/[^a-z]/gi, '-');
  str = str.split('');
  
  for (var i=1;i<str.length;i++) {
    if (str[i] == str[i].toUpperCase() && str[i-1] != '-' && str[i] != '-') {
      str.splice(i, 0, '-');
    }
  }
  
  return str.join('').toLowerCase();
}

spinalCase('This Is Spinal Tap');
