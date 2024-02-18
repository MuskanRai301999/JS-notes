//IIFE- Immediately Invoked Function Expression
//Function expressions when created they are executed immediately are called IIFE
//This is also one kind of function expression or anonymous function
//It is an anonymous function and closed in grouping paraenthesis

(function(){
    console.log('IIFE');
})();
//the above function is a IIFE

//with parameters
(function(a,b){
    console.log(a+b);
})(4,2);
//In order to save the global space and not pollute the global execution space,this iffe was used to save that global space before let and const
 //It is also used to create the public and private members/variables

const user= (function(){
    const userData ={
        userName:'John',
        userAge:20,
    }
    function getName(){
console.log(userData.userName)
    }
    function updateAge(age){
        console.log(userData.userAge+age);
    }
    return{getName,updateAge}
 })();
 console.log(user);
 user.getName();
 user.updateAge(3);
 //BY using IIfe we have create this private function 
 console.log(user.userData);//undefined ..can't 

