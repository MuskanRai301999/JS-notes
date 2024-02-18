const car = {
    getDetails(name){
        console.log(`Your car is ${name}`);
    },
};
//linking prototype car1 to car
const car1 = Object.create(car);
console.log(car1);
car1.getDetails('Audi');//Your car is Audi
//NO method or no property will be copied in this method


//Object.assign

