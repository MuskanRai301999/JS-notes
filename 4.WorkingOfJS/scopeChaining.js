//Scope Chaining in Javascript
//If any function will not find the variable in the local memory,it will look into 
//the outer context and the chain will go on,this is known as scope chaining

var a = 10;
let b = 20;
const c = 30;

function print() {
  var a = "ten";
  let b = "twenty";

  console.log("***** Inside print Function*****");
  console.log(a, b, c);
  console.log("***** *****");

  function innerPrint() {
    var a = "inner10";
    console.log("*Inside innerPrint Function*");
    console.log(a, b, c);
  }
  innerPrint();
}

print();
console.log(a, b, c);
