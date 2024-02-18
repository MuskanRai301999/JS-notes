//Destructuring in JS
//Destructuring is basically a way to unpack more than one values,more than one properties from the object.
//I want to pick the values i want to take from object and use it with the convenience of without using the object name again and again.
//This is what destructuring concept is

const obj = {
  a: 1,
  b: 2,
  c: ["O", "B", "J"],
  d: { value: "Val" },
};
//1.Destructuring with the same name
//Binding Pattern
// const { a,b,c,d } = obj;//const a = obj.a
// console.log(a);
// console.log(c);

//2.Destructuring by renaming it
const { a: a1 } = obj;

console.log(a1);
//console.log(a);

//3.Assignment Pattern
let b;
({ b: b } = obj);//()useing the braces to avoid any block scope.
console.log(b);
