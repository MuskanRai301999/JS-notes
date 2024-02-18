//Pure functions are functions which returns same output for same set of inputs
//Its output will not be manipulated by any external factor

function calculate(num1,num2){
    return num1*num2;
}
console.log(calculate(6,2));//12
//The above function is a pure function

const discount = 25;
function calcDis(price){
    discount=discount-5;
    return price -discount;
}
//The above function is not a pure function as it is based on the price 