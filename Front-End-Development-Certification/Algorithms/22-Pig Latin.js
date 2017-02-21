//Pig Latin: https://www.freecodecamp.com/challenges/Pig-Latin

//Translate the provided string to pig latin. Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay". If a word begins with a vowel you just add "way" to the end. Input strings are guaranteed to be English words in all lowercase. Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.


function translatePigLatin(str) {
  str = str.split('');
  var first;
  
  for (var i = 0; i < str.length; i++) {
    if ('aeuoi'.includes(str[i])) {
      first = str.splice(0, i).join('');
      str = str.join('');
      break;
    }
  }
  if (first.length === 0) {
    str += 'way';
  } else {
    str += first + 'ay';
  }
  
  return str;
}

translatePigLatin("glove");
