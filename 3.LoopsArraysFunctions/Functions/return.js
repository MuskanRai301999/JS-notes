//Return value of a function 
function squared(num){
    console.log(num*num);
}
squared(5);
squared(7);
//By the above code we can't use these squared numbers anywhere
//to use these values return keyword is used
//consoled value can't be use anywhere

function square(num){
    return num*num;
}
//you can store the returned value to a variable and can use it later
//after return you only a single statement can be written
const square5 = square(5);
console.log(square5)
