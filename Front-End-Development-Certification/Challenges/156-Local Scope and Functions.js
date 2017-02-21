//Local Scope and Functions: https://www.freecodecamp.com/challenges/Local-Scope-and-Functions

//Variables which are declared within a function, as well as the function parameters have local scope. That means, they are only visible within that function. Here is a function myTest with a local variable called loc. loc is not defined outside of the function. Declare a local variable myVar inside myLocalScope. Run the tests and then follow the instructions commented out in the editor. HintRefreshing the page may help if you get stuck.


function myLocalScope() {
  var myVar = 'use strict';
  console.log(myVar);
}
myVar = myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log(myVar);

// Now remove the console log line to pass the test

