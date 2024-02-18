/** Type Conversion */

/*  *** Convert to String ***  */
// String();

console.log(String(100));
console.log(String(true));
console.log(String(null));
console.log(String(undefined));

// toString();
//null and undefined values cannot be converted to string using the toString method
console.log((123).toString());
// console.log(null.toString());

/** Convert to Number */
// Number();

console.log("***NUMBER***");

console.log(Number("25"));
console.log(Number("Value")); //returns NaN
console.log(Number(false)); //true returns 1 and false returns 0

// Unary + Operator --- works on Variables

let a = "123falak";
console.log(+a); //returns NaN
let b = 123;
console.log(+b); //returns 123

// parseFloat();
console.log(parseFloat("123.45f"));//will return with the floating values 123.45
//in a number passing a string after a number 123f will show NaN
//but in case of parseInt it will parse the numbers before the alphabet and return 123
//in parseInt if the number starts with the alphabet f123 will show NaN.

// parseInt();
console.log(parseInt("123.45f"));// will not return the floating values 123

/** Convert to Boolean */
// Boolean();

console.log(Boolean('gdgd'));//
console.log(Boolean(undefined));

console.log(Boolean(undefined));
