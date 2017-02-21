//Wherefore art thou: https://www.freecodecamp.com/challenges/Wherefore-art-thou

//Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching property and value pairs (second argument). Each property and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array. For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the property and its value, that was passed on as the second argument. Remember to use Read-Search-Ask if you get stuck. Write your own code.


function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  for (var i = 0; i < collection.length; i++) {
    for (var k = 0; k < Object.keys(source).length; k++) {
      if (collection[i][Object.keys(source)[k]] != source[Object.keys(source)[k]]) {
        break;
      } else if (k == (Object.keys(source).length -1 )) {
        arr.push(collection[i]);
      }
    }
  }
  // Only change code above this line
  return arr;
}

whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });
