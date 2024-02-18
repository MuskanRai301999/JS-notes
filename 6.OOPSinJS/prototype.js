//JavaScript is a prototype-based language.
//objects in javascript are called prototypes
//All the objects in Javascript by default has an built in property called prototype
//and prototype itself is an object

function Movie(title) {
  this.title = title;
}
const movie1 = new Movie("The Avengers");

movie1.year = 2012;
console.log(movie1);
console.log(movie1.__proto__);

const movie2 = new Movie("Avatar");
console.log(movie2);
console.log(movie2.__proto__);
console.log(movie2.__proto__.__proto__);//object
console.log(movie2.__proto__.__proto__.__proto__);//null

//the prototype of movie1 and movie2 is movie and movie is the prototype of object. This is called prototypal inheritance.
//Everything in Javascript is a kind of objects.
//Functions are also objects ,arrays as well
//null->object->movie->movue1 and movie2
