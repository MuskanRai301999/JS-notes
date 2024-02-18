/*Problem statement
Complete the function reverseString(), which accepts a string as its parameter, reverses it, and returns the string.



Input

 reverseString("hello");


Output

"olleh"


Note:

Note - Do not use any loop in implementation. 

You can use methods like split() , join() and reverse() to solve the problem.*/
function reverseString(str){
//Implement Your function here
    var splitString = str.split("");
    
    var reverseArray = splitString.reverse();
    
    var joinArray = reverseArray.join("");
    
    return joinArray;
}
console.log(reverseString("Hello"));
//Output : "olleH"