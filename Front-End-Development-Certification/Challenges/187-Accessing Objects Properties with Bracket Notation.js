//Accessing Objects Properties with Bracket Notation: https://www.freecodecamp.com/challenges/Accessing-Objects-Properties-with-Bracket-Notation

//The second way to access the properties of an object is bracket notation ([]). If the property of the object you are trying to access has a space in it, you will need to use bracket notation. Here is a sample of using bracket notation to read an object property: Note that property names with spaces in them must be in quotes (single or double). Read the values of the properties "an entree" and "the drink" of testObj using bracket notation and assign them to entreeValue and drinkValue respectively.


// Setup
var testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

// Only change code below this line

var entreeValue = testObj["an entree"];   // Change this line
var drinkValue = testObj["the drink"];    // Change this line
