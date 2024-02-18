//when you dont know how many iterations have to take place only the conditional should be keep in mind then while loop is used

let num =12345;
while(num !== 0){
    let digit = num %10;
    num = parseInt(num/10);
console.log(digit);
}