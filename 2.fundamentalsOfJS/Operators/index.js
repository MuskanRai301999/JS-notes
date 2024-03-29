/** Operators in JavaScript */
/* 1. Arithemetic 
      (+, -, *, /, %, **, ++, --) 
*/

let x = 10;
x++; //x=x+1
x--;
x--;

console.log(x);

/* 2. Assignment 
      (=, +=, -=, *=, /=, %=, **=) 
*/

let a = 2;

let b = 5;
b += 2; // b = b+2

console.log(b);

/* 3. Comparison 
      (<, > ,<=, >=, ==, !=, ===, !==)
*/

console.log(5 == "5");
console.log(5 === "5");
console.log(5 !== "5");

/* 4. Logical 
      (&&, ||, !)
*/

console.log(5 && 1);
//output=1
//and operator returns last truthy value and first falsy
console.log(0 || 7 || "" || null);
console.log(!1); //returns false
console.log(!0);//returns true

/* 5. Bitwise 
      (>>, <<, &, |, ^, ~)
*/
