/*Refactor the existing code to improve memory efficiency by adding methods to the prototype chain instead of creating copies for each book object.

This will ensure that the methods are shared across all instances of the book constructor function.
*/

function Book(title, author, publicationYear) {
  this.title = title;
  this.author = author;
  this.publicationYear = publicationYear;

  // Make this function as a prototypal function

  this.isClassic = function () {
    const currentYear = 2023;
    const age = currentYear - this.publicationYear;
    if (age >= 50) {
      return "The book is from the classic collection";
    }

    return "The book is not a classic collection book";
  };
}