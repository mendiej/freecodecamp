//Everything Be True: https://www.freecodecamp.com/challenges/Everything-Be-True

//Check if the predicate (second argument) is truthy on all elements of a collection (first argument). Remember, you can access object properties through either dot notation or [] notation. Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

function truthCheck(collection, pre) {
    console.log('-----');
  for (var x = 0; x < collection.length; x++) {
    if (!collection[x].hasOwnProperty(pre) || !Boolean(collection[x][pre])) {
      console.log(collection[x]);
      return false;
    }
  }
  return true;
}