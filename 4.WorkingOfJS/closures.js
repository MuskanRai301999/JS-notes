//Closure is a combination of function with its lexical env.
//even if it is popped out of the call stack ,Javascript will still remember its existence

let a = 'Global';

function outerPrint() {
  let b = 'OuterPrint';

  //in js we can return the whole function
  return function innerPrint() {
    let c = 'innerPrint';
    return `${a} -> ${b} -> ${c}`;
  };
}
const show = outerPrint();
console.log(show);
//here outerPrint functions is popped out after returning the innerPrint function
/*ƒ innerPrint() {
    let c = 'innerPrint';
    return `${a} -> ${b} -> ${c}`;
  }*/
const printInner = show();
console.log(printInner);
//here the return statement of innerprint is printed
//Global -> OuterPrint -> innerPrint

//But, when the outerPrint is popped out how the value of b is being printed on innerprint function?
//Closure is created in this situation to remember the traces of outerPrint.