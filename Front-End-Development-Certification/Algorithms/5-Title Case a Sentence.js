//Title Case a Sentence: https://www.freecodecamp.com/challenges/Title-Case-a-Sentence

//Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case. For the purpose of this exercise, you should also capitalize connecting words like "the" and "of". Remember to use Read-Search-Ask if you get stuck. Write your own code.


function titleCase(str) {
  str = str.split(' ');
  for (var i=0; i<str.length; i++) {
    str[i] = str[i].toLowerCase();
    str[i] = str[i][0].toUpperCase() + str[i].slice(1, str[i].length);
  }
  str = str.join(' ');
  return str;
}

titleCase("I'm a little tea pot");
