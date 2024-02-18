//Objects literals are fine when you have to create 1 or 2 objects..
// but if you have to create let say 10,it will be a hectic job 
//we can write an object using constructor function to eliminate these things.
const movie1 = {
  title: "The Avengers",
  year: 2012,
  genre: "Action, Sci-Fi, Thriller",
  cast: {
    main_lead: "Robert Downey Jr.",
    others: "Chris Evans",
  },

  getDetails() {
    console.log(`
      Title: ${this.title}
      Year: ${this.year}
      Genre: ${this.genre}
      Cast: ${this.cast}
      `);
  },
};
movie1.getDetails();

const movie2 = {
  title: "Movie2",
  year: 2018,
  genre: "Action, Sci-Fi, Thriller",
  cast: {
    main_lead: "Robert Downey Jr.",
    others: "Chris Evans",
  },

  getDetails() {
    console.log(`
        Title: ${this.title}
        Year: ${this.year}
        Genre: ${this.genre}
        Cast: ${this.cast}
        `);
  },
};
movie2.getDetails();
