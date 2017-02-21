//Validate US Telephone Numbers: https://www.freecodecamp.com/challenges/Validate-US-Telephone-Numbers

//Return true if the passed string is a valid US phone number. The user may fill out the form field any way they choose as long as it is a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants): For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false. Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.


function telephoneCheck(phone) {
  var check = /^((:?1\s|1-)?\d{3}(?:-|\s)?|(1\s\(|1\(|\()\d{3}\)\s?)\d{3}(:?\s|-)?\d{4}$/;
  if (phone.match(check) !== null) {return true;}
  else {return false;}
}



telephoneCheck("1 (555) 555-5555");
