
a =10;
console.log(a);//op-10

console.log(a);
a=10;//not working a is not defined because in creation phase of execution context it was not present

//undefined- that means memory is being allocated to this variable somewhere in the program that is why undefined is coming
//not defined- if memoru has not been allocated to the variable i.e. it is undefined

console.log(a);//undefined
var a = 10;

console.log(a); //ReferenceError: cannot access 'a' before initialisation
let a = 10;
//Temporal dead zone - let and const variables are hoisted ,but they are not accesible till the point you define them manually.
//in order to eradicate bugs and inconsistencies
let a=10;
{
    console.log(a);
    let a=20;
}