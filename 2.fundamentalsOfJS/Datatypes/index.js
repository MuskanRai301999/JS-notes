// Datatypes
// 1.Object
// 2.Primitive Datatypes

// Primitive Datatypes
//1.Number(64bit)
let num = 10;
console.log(typeof num);
console.log(typeof 20);

//2.String
const firstName = "Muskan";
const lastName ='Rai';
const nickName =`Tom`;
console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof nickName);

//3.boolean
let bool=false;
console.log(typeof bool);

//4.Undefined
let a;
console.log(typeof a);
console.log(a);

//5.null
let b = null;
console.log(b);
console.log(typeof b);

//6.Symbol(ES6/2015)

//BigInt(ES6/2020)
//bigger than 64bit number
let num1=10n;
console.log(typeof num1);

//Interesting things about JS
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_VALUE *10);

let num3=Infinity;
console.log(12/0);
console.log(188/Infinity);