const fruits = ["Apple", "Mango", "Kiwi", "Berry", "banana", "lichi"];

//Binding Pattern

//const[a, m] =fruits;
//console.log(a,m);//Apple Mango

// const [a, , , k] = fruits;
// console.log(a, k);//Apple berry

//const [a, m, ...f] = fruits;
//console.log(f); //All the fruits except apple and mango in an array
//[Kiwi,Berry,Banana,Litchi]

const [a, m, ...[, be, ba]] = fruits; //using rest operator
console.log(ba); //banana
//the above will skip kiwi and only include berry and banana and leave litchi as well
