//CallBack function is a function which is passed as a parameter or you can pass it as a arguement while calling a function.
function greet(wish){
    console.log(`${wish()},welcome to the javaScript course`);
}
function sayHi(){
    return 'Hi';
}
function sayHello() {
  return "Hello";
}
function goodMorning() {
  return "Good Morning";
}
greet(sayHi);
greet(sayHello);
greet(goodMorning);