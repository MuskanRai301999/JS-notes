//Higher order functions are those functions which accepts a function as an arguement
//a function which returns as a function is also called HOF

//function higherOrder(fn) {}
function calculate(input, operation) {
  const output = [];
  for (let number of input) {
    output.push(operation(number));
  }
  return output;
}

function cubic(number) {
  return number * number * number;
}

function square(number) {
  return number * number;
}

const cube3 = calculate(inputs, cubic);
console.log(cube3);
const square2 = calculate(inputs, square);
console.log(square2);
