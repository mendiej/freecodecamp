//Boo who: https://www.freecodecamp.com/challenges/Boo-who

//Check if a value is classified as a boolean primitive. Return true or false. Boolean primitives are true and false. Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.


function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  var x = Boolean(bool);
  if (x === bool) {
    return true;
  } else {
    return false;
  }
}

booWho(null);