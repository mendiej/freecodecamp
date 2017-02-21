//Global vs Local Scope in Functions: https://www.freecodecamp.com/challenges/Global-vs-Local-Scope-in-Functions

//It is possible to have both local and global variables with the same name. When you do this, the local variable takes precedence over the global variable. In this example: The function myFun will return "Head" because the local version of the variable is present. Add a local variable to myOutfit to override the value of outerWear with "sweater".


// Setup
var outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  var outerWear = "sweater";
  
  
  // Only change code above this line
  return outerWear;
}

myOutfit();
