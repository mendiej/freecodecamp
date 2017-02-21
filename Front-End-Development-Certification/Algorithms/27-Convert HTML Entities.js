//Convert HTML Entities: https://www.freecodecamp.com/challenges/Convert-HTML-Entities

//Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities. Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.


function convertHTML(str) {
  var lookup = {"&":"&amp;",">":"&gt;","<":"&lt;","\"":"&quot;","'":"&apos;"};
  str = str.split('');
  
  for (var i = 0;i < str.length; i++) {
    if (lookup[str[i]] !== undefined) {
      str[i] = lookup[str[i]];
    }
  }
  
  return str.join('');
}

convertHTML("Shindler's List");
