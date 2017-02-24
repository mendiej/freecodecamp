//Friendly Date Ranges: https://www.freecodecamp.com/challenges/Friendly-Date-Ranges

//Convert a date range consisting of two dates formatted as YYYY-MM-DD into a more readable format. The friendly display should use month names instead of numbers and ordinal dates instead of cardinal (1st instead of 1). Do not display information that is redundant or that can be inferred by the user: if the date range ends in less than a year from when it begins, do not display the ending year. Additionally, if the date range begins in the current year (i.e. it is currently the year 2016) and ends within one year, the year should not be displayed at the beginning of the friendly range. If the range ends in the same month that it begins, do not display the ending year or month. Examples: makeFriendlyDates(["2016-07-01", "2016-07-04"]) should return ["July 1st","4th"] makeFriendlyDates(["2016-07-01", "2018-07-04"]) should return ["July 1st, 2016", "July 4th, 2018"]. Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

var monthNames = {"01": "January", "02": "February", "03": "March", "04": "April", "05": "May", "06": "June", "07": "July", "08": "August", "09": "September", "10": "October", "11": "November", "12": "December"};

function makeFriendlyDates(arr) {
    
  function days(day) {
    if (day[0] == '0') {day = day.replace('0','');}
    if (day == '1') {day += 'st';}
    else if (day == '2') {day += 'nd';}
    else if (day == '3') {day += 'rd';}
    else {day += 'th';}
    return day;
  }
  
  function changeFormat(date) { 
    date[date.length-1] = days(date[date.length-1]);
    if (date.length == 3) {
        date[1] = monthNames[date[1]];
      date = date[1] + ' ' + date[2] + ', ' + date[0];
    } else if (date.length == 2) {
        date[0] = monthNames[date[0]];
      date = date.join(' ');
    } else {
        date = date[0];
    }
    return date;
  }
  
  // -- MAIN
  var first = arr[0].split('-'), second = arr[1].split('-'); 
  if (arr[0] == arr[1]) {return [changeFormat(first)];}
  
  if (first[0] == second[0]) {
    if (first[0] == '2016') {
      if (first[1] == second[1]) {second.splice(0,2);}
      else {second.splice(0,1);}
      first.splice(0,1);
    }
    else {
      if (first[1] == second[1]) {second.splice(0,2);}
      else {second.splice(0,1);}
    }
  } else {
    if ((((Number(second[0]) - Number(first[0]) ) * 12) + Number(second[1]) - Number(first[1])) < 12 || (((((Number(second[0]) - Number(first[0]) ) * 12) + Number(second[1]) - Number(first[1]))) == 12 && Number(second[2]) < Number(first[2])) ) {
        if (first[0] == '2016') {first.splice(0,1);second.splice(0,1);}
      else {second.splice(0,1);}
    }
  }
  
  first = changeFormat(first);
  second = changeFormat(second);
  
  return [first, second];
}

makeFriendlyDates(["2022-09-05", "2023-09-05"]);