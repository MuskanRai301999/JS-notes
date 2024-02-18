function greet(){
    setTimeout(()=>{
        console.log('hello');
    },1000);
}
function message(){
    console.log('welcome to the session');
}
greet();
message();
//The above code will show welcome to the session and then hello
//so to get hello we can use a callback function
function greet(callback) {
  setTimeout(() => {
    console.log("hello");
    callback();
  }, 1000);
}
function message() {
  console.log("welcome to the session");
}
greet(message);//hello
//welcome to the session
//when you put a fetch request or u are trying to fetch something from the server its not neccessary that u 'll get the resposne at the moment .. it might take sometime
