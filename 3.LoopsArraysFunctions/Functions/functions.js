//Instead of repeating same lines of code again and again.. we can use functions

//creation of functions without parameters
function greetUser() {
  console.log("Hello ,welcome to the session");
}
//calling the function
greetUser();
greetUser();

//creation of function with parameters
function greetUserByName(username) {
  console.log("Hello" + username + "Welcome to the seesion");
}
greetUserByName("Muskan");
