/*Problem statement
Create a function to delete all the occurrences of an element in an array without using any other array.

The function deleteOccur should take two parameters, an array, and the element to be deleted from the array and it should return the updated array.


Input

let arr = [23, 56, 4, 78, 5, 63, 45, 210, 56];
let ele =56;
deleteOccur(arr,ele);


Output

[23,4,78,5,63,45,210]*/

let ele = 56;
function deleteOccur(arr,ele){
   let index = arr.indexOf(ele);
  
  while (index !== -1) {
    arr.splice(index, 1);
    index = arr.indexOf(ele);
  }let arr = [23, 56, 4, 78, 5, 63, 45, 210, 56];
le
  
  return arr;
};

console.log(deleteOccur(arr,ele));
//Output: [23,4,78,5,63,45,210];