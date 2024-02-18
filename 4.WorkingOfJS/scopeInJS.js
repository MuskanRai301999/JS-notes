//Scope in JS

//Global
//Functional(Local)
//Block introduced in ES-6 let and const

//global scope
var varNum = 10;
let letNum =20;
const constNum=30;

//functional scope
function print() {
  var varLocal = 10;
  let letLocal = 20;
  const constLocal = 30;

  //global variables can be accessible anywhere in the program
  console.log(varNum, letnum, constNum);
  console.log(varLocal, letLocal, constLocal);
}

console.log(varNum, letnum, constNum);

print();

//The local scoped variables declared inside the function will not be accessible outside the function
//This is called functional scope
console.log(varLocal);
console.log(letLocal);
console.log(constLocal);

//Block scope-anything enclosed inside curly braces comes inside block scope
//if I declared any let and const variable inside a block scope i can only use those variables only inside the block ,not outside it
