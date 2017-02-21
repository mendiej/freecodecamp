//Check for Palindromes: https://www.freecodecamp.com/challenges/Check-for-Palindromes

//Return true if the given string is a palindrome. Otherwise, return false. A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing. NoteYou'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything lower case in order to check for palindromes. We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others. We'll also pass strings with special symbols, such as "2A3*3a2", "2A3  3a2", and "2_A3*3#A2". Remember to use Read-Search-Ask if you get stuck. Write your own code.


function palindrome(str) {
  
  // remove punctuation, spaces and symbols and change to lower case
  str = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
  
  // make second var with reverse string
  var str2 = str.split('').reverse().join('');
  
  // compare strings 
  if (str == str2) {
    return true;
  } else {
    return false;
  }
}



palindrome("_eYe678");
