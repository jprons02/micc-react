/*
This function takes an array of objects and a keyname as its arguments, and sorts the array in ascending order based on the value of the "keyname" key in each object.

Here's an example usage of this function with the array you provided:
var arr = [{date: '3/23/2022', test: 'hello1'}, {date: '7/2/2018', test: 'hello2'}];
var sortedArr = sortByDate(arr, date);
console.log(sortedArr);
// Output: [{date: '7/2/2018', test: 'hello2'}, {date: '3/23/2022', test: 'hello1'}]
In this example, the sortByDate function is called with the arr array as its argument, and the sorted array is stored in a new variable named sortedArr. The console.log statement then displays the sorted array.
*/
export const sortByDateAscending = (arr, keyname) => {
  return arr.sort(function (a, b) {
    var dateA = new Date(a[keyname]);
    var dateB = new Date(b[keyname]);
    return dateA - dateB;
  });
};

export const sortByDateDescending = (arr, keyname) => {
  return arr.sort(function (a, b) {
    var dateA = new Date(a[keyname]);
    var dateB = new Date(b[keyname]);
    return dateB - dateA;
  });
};
