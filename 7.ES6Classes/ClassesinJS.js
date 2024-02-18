//We know that JS is an object oriented language. Main pillars of object-oriented is 
//1.Innheritance
//2.Classes and Instance
//3.Polymorphism
//4.Encapsulation
//5.Abstraction

//By using new keyword we can
//1.Create an obj
//2.Bind this to obj
//3.Return obj

//constructor function
function Vehicle(name, color, wheels) {
    this.name = name;
    this.color = color;
    this.wheels = wheels;

    this.getDetails = function () {
        console.log(`
          The ${this.name} is ${this.color} in color.
          It has ${this.wheels} wheels
    `);
    };
}

// const car = new Vehicle('Car', 'blue', 4);
// console.log(car.hasOwnProperty('getDetails'));

// car.getDetails();

//class expressions
// const Vehicle = class{

// }

// Classes in JS.. Class declaration
//The only differece between classes in JS and Classes is  that we have to specifically mention the constructor function in classes in js.
class VehicleCl {
    //declaring initial properties..it is optional
    name;
    color;
    wheels;

    //constructor
    constructor(name, color, wheels, number) {
        this.name = name;
        this.color = color;
        this.wheels = wheels;
    }

    //methods
    getDetails() {
        console.log(`
    The ${this.name} is ${this.color} in color.
    It has ${this.wheels} wheels.
    `);
    }
}

const veh1 = new VehicleCl(
    'Scooter',
    'Grey',
    2
);


console.log(veh1);
veh1.getDetails();

//Classesin JS
//Initial property declaration is optional
//Classes are not hoisted as functions
//Classes are executed in strict mode except whether using strict mode or not
