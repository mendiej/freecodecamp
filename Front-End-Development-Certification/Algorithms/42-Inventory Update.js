//Inventory Update: https://www.freecodecamp.com/challenges/Inventory-Update

//Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item. Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

function updateInventory(arr1, arr2) {
  var add;
  
  for (var i = 0; i < arr2.length; i++) {
    add = true;
    for (var x = 0; x < arr1.length; x++) {
      if (arr1[x][1] == arr2[i][1]) {
        arr1[x][0] = arr1[x][0] + arr2[i][0];
        add = false;
        break;
      }
    }
    if (add) {
      arr1.push([arr2[i][0], arr2[i][1]]);
    }
  }
  return arr1.sort(function(a, b){
    if(a[1] < b[1]) {return -1;}
    else if(a[1] > b[1]) {return 1;}
  });
}