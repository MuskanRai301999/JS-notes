const car = {
  name: "car",
  color: "black",
  getDetails(brand, seats) {
    console.log(
      `
      This is a ${this.color} ${this.name} of ${brand} company.
      It has ${seats} seats`
    );
  },
};

const bus = {
  name: "bus",
  color: "blue",
};

car.getDetails("Audi", 5);

//The call method is used to bind this of getDetails to whatever object you want
//Suppose I want a getDetails function of bus as well so instead of copying the function and repeating it again and again ,we can use the call method
//In call method,first srguement should be where you want to bound your this keyword with ,in this case it is bus.
//and as our getDetails is taking 2 parameters so we have passed 2 parameters name and seats,these are optional
//if you don't define the other 2 parameters it will be defined as undefined
car.getDetails.call(bus, "Star", 50);

//Nowadays apply is not that much used..because it was famous earlier because it accepts the array of arguements not as a list of arguements.
//But with the introduction of spread operator we can make use of apply
car.getDetails.apply(bus, ["Gold", 30]);
//By bind method we can actually bind the this of one object of the method to another object.

const veh1 = car.getDetails.bind(bus);
veh1("silver", 20);
veh1("bronze", 45);
