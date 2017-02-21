//Roman Numeral Converter: https://www.freecodecamp.com/challenges/Roman-Numeral-Converter

//Convert the given number into a roman numeral. All roman numerals answers should be provided in upper-case. Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

function convertToRoman(num) {
  var numeral = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  var value = '';
  
  for (var i = 0; i < numeral.length; i++) {
    while (num >= numeral[i]) {
      num -= numeral[i];
      value += roman[i];
    }
  }
  
 return value;
}

convertToRoman(36);
