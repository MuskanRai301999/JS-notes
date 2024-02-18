/*Problem statement
Create a function to get all the duplicate elements from an array.


Requirement:

The function findDuplicate should take an array as a parameter.
Create a new Array of all the duplicate elements present in the array 
Should return the newly formed array.


Input

let arr = [4, 2, 34, 4, 1, 12, 1, 4];


Output

[4,1]*/
let arr = [4, 2, 34, 4, 1, 12, 1, 4];
function findDuplicate(arr) {
  //Implement your function here
  let newArray = []; //creating empty array
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        newArray.push(arr[i]);
        break;
      }
    }
  }
  console.log(newArray);
}
console.log(findDuplicate(arr));
