//We have created a method in the prototype which will not be copied to all the objects it will only be inherited and here prototypal inheritance is of high use where you do not want to make copies of properties not just methods ,you can create properties as well
function Movie(title) {
  this.title = title;
  //   this.getDetails = function () {
  //     console.log(`Title: ${this.title}`);
  //   };
}
//creating method using prototype
Movie.prototype.getDetails = function () {
  console.log(`Title: ${this.title}`);
};
//Creating property using prototype
Movie.prototype.year = 2012;

const movie1 = new Movie("The Avengers");

movie1.year = 2012;
console.log(movie1);
console.log(movie1.__proto__);

const movie2 = new Movie("Avatar");
console.log(movie2);
console.log(movie2.__proto__.__proto__.__proto__);
