//Caesars Cipher: https://www.freecodecamp.com/challenges/Caesars-Cipher

//One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount. A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔  'O' and so on. Write a function which takes a ROT13 encoded string as input and returns a decoded string. All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on. Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.


function rot13(str) { // LBH QVQ VG!
  str = str.split('');
  for (var i = 0; i < str.length; i++) {
    pos = str[i].charCodeAt();
    if (pos >= 78 && pos <= 90) {
      str[i] = String.fromCharCode(pos - 13);
    } else if (pos >= 65) {
      str[i] = String.fromCharCode(pos + 13);
    }
  }
  return str.join('');
}

// Change the inputs below to test
rot13("LBH QVQ VG!");
