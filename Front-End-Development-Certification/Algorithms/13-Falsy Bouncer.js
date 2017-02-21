//Falsy Bouncer: https://www.freecodecamp.com/challenges/Falsy-Bouncer

//Remove all falsy values from an array. Falsy values in JavaScript are false, null, 0, "", undefined, and NaN. Remember to use Read-Search-Ask if you get stuck. Write your own code.


function bouncer(arr) {
  return arr.filter(Boolean);
}

bouncer([7, "ate", "", false, 9]);
