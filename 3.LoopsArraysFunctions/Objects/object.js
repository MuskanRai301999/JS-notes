//In other languages objects are created through classes ,but in javascript we can actually create objects without defining classes.
//objects are present in the form of key-value pairs
//key by default has a string type,it can also be a number as well,it won't throw any error
//The values can be anything a number,a string,boolean,and even a function
const student ={
    name:"Alexa",
    age:10,
    hobby:"dancing",
    100:"hundred",
    //here we can define an anonymous function show will act as the name of the function
    show: function(){
        console.log("this is the student details action");
    },
};
console.log(student);
//accessing the particular key by dot and bracket notation
console.log(student.name);//alexa
console.log(student["name"]);//in bracket notation string type call should be there
console.log(student[100]);
