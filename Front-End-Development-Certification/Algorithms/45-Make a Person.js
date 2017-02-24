//Make a Person: https://www.freecodecamp.com/challenges/Make-a-Person

//Fill in the object constructor with the following methods below: Run the tests to see the expected output for each method. The methods that take an argument must accept only one argument and it has to be a string. These methods must be the only available means of interacting with the object. Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

var Person = function(firstAndLast) {
  var name = firstAndLast;
  this.getFullName = function() {return name;};
  this.getFirstName = function() {return name.split(' ')[0];};
  this.getLastName = function() {return name.split(' ')[1];};
  this.setFullName = function(x) {name = x;};
  this.setFirstName = function(x) {name = x + ' ' + name.split(' ')[1];};
  this.setLastName = function(x) {name = name.split(' ')[0] + ' ' + x;};
};

var bob = new Person('Bob Ross');
bob.getFullName();