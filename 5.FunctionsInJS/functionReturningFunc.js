//Function returning functions

function greet(message){
    return function(wishes){
        console.log(`${wishes},${message}`);
    };
}
//1st method to access the above function
// const greeting =greet('I hope u are doing well');
// greeting('Hello');
//Hello i hope u are doing well

//2nd method
greet('Welcome to the session')("hi");
//hi Welcome to the session