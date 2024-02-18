export let obj = { pname: "mobile", price: 10 };

let a = 20;
let b = 30;

export function add(i, j) {
  return i + j;
}

//Instead of exporting each function or variables one by one you can export them in one go
//export{obj,add};
//default export -each item in a module
export default a;