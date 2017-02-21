//Accessing Nested Objects: https://www.freecodecamp.com/challenges/Accessing-Nested-Objects

//The sub-properties of objects can be accessed by chaining together the dot or bracket notation. Here is a nested object: Access the myStorage object and assign the contents of the glove box property to the gloveBoxContents variable. Use bracket notation for properties with a space in their name.


// Setup
var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

// Only change code below this line

var gloveBoxContents = myStorage.car.inside["glove box"]; // Change this line

