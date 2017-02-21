//Missing letters: https://www.freecodecamp.com/challenges/Missing-letters

//Find the missing letter in the passed letter range and return it. If all letters are present in the range, return undefined. Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.


function fearNotLetter(str) {
  str = str.split('');
  var i = 1;
  var missing = '';
  
  while (i < (str.length - 1)) {
    if ((str[i+1].charCodeAt() - str[i].charCodeAt()) > 1) {
      missing += String.fromCharCode(str[i].charCodeAt()+1);
    }
    i++;
  } 
  
  if (missing.length === 0) {
    return undefined;
  } else {
    return missing;
  }
  
}

fearNotLetter("bcd");
