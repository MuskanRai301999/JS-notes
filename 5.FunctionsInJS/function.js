
//Function Declaration
function sum(a,b){
    return a+b;
}

//Invokation of the function
const sum1=sum(2,3);
console.log(sum1);

//Function expression
//A function can be used as a value and can be assigned to a variable,this is called function expression
//assigning a function to the variable
//anonymous functions are used in function expressions
const sum2 =function(a,b){
    return a+b;
}
console.log(sum2);//return thr above function
console.log(sum2(1,8));//9

//There is a minor difference between the function declarations and function expressions i.e. hoisting
//hoisting is possible in function declarations but not in function expressions

//Arrow function
var prod=(num1,num2)=>{
    return num1*num2;
}
console.log(prod(2,4));
//the above function can also be wriiten as
var prod1=(a,b)=>a*b;
//for single statements parenthesis and return keyword can be skipped
