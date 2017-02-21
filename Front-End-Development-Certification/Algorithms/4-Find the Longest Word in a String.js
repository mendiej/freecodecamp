//Find the Longest Word in a String: https://www.freecodecamp.com/challenges/Find-the-Longest-Word-in-a-String

//Return the length of the longest word in the provided sentence. Your response should be a number. Remember to use Read-Search-Ask if you get stuck. Write your own code.


function findLongestWord(str) {
  // split sentence
  str = str.split(' ');
  // check length
  var word;
  var wordLength = 0;
  
  for (var i = 0; i < str.length; i++) {
    if (str[i].length > wordLength) {
      word = str[i];
      wordLength = str[i].length;
    }
  }
  return wordLength;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
