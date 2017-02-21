//Search and Replace: https://www.freecodecamp.com/challenges/Search-and-Replace

//Perform a search and replace on the sentence using the arguments provided and return the new sentence. First argument is the sentence to perform the search and replace on. Second argument is the word that you will be replacing (before). Third argument is what you will be replacing the second argument with (after). NOTE: Preserve the case of the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog" Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.


function myReplace(str, before, after) {
  var re = new RegExp(before);
  after = after.toLowerCase();
  
  before = before.split('');
  
  if (before[0] == before[0].toUpperCase()) {
    after = after.split('');
    after[0] = after[0].toUpperCase();
    after = after.join('');
  }
  
  str = str.replace(re, after);
  return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
