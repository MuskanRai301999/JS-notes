const divEle = document.querySelector(".card-container");

function getDetails(id) {
  const req = new XMLHttpRequest();

  req.open("GET", `https://dummyjson.com/users/${id}`);
  req.send();

  req.addEventListener("load", function () {
    //if there is an error in loading the site
    if(req.status === 404)return;
    // console.log(typeof req.responseText);//string convertin the response into JSON format
    //console.log(JSON.parse(this.responseText));

    const data = JSON.parse(this.responseText);
    console.log(data);

    //callback function
    displayUser(data, "beforeend");

    //request2 for the next userCard
    const request2 = new XMLHttpRequest();

    request2.open("GET", `https://dummyjson.com/users/${id - 1}`);
    request2.send();
    request2.addEventListener("load", function () {
      //handling the edge cases
      if (request2.status === 404) return;
      //console.log(this.responseText);
      //console.log(JSON.parse(this.responseText));
      const data = JSON.parse(this.responseText);
      console.log(data);
      displayUser(data, "afterbegin", "other");
    });

    //Manipulating the whole Usercard - CReating usercard in the javascript itself

    //by the use of template literals,we have

    // const card = `<div class="user-card">
    //       <img src="https://robohash.org/hicveldicta.png" alt="Profile Image" />
    //       <h3>John</h3>
    //       <h3>Doe</h3>
    //       <p class="email">j.doe@gmail.com</p>
    //       <button class="btn">View Profile</button>
    //     </div>`;
    //Instead of hard-coding the values we know that the above template literal will create an object on the console.
    //By accessing its properties we can create the usercard as follows
  });
}
function displayUser(data, pos, className = "") {
  const card = `<div class="user-card" ${className}>
        <img src=${data.image} alt="Profile Image" />
        <h3>${data.firstName}</h3>
        <h3>${data.lastName}</h3>
        <p class="email">${data.email}</p>
        <button class="btn">View Profile</button>
      </div>`;

  //textContent and innerHTMl both are used to populate the text,but the benefit of using innerHTMl is that you can actually give tags as well.
  //but there should be less use of innerHTMl because they are higly prone to be hacked , anyone can change the content of the website using innerHTML,so textContent is preferred over innerHTML.

  //  divEle.innerHTML =card;
  //As we are using the innerHTML ,so the usercards of id 1 appears and once we call the other id ,it disappears but we want to that the usercard we called earlier should be on the screen adjacent to the new one as well
  //it has positions beforeBegin,afterBegin,beforeEnd and afterEnd
  divEle.insertAdjacentHTML(pos, card);
}
getDetails(2);

//The positions of the cards vary if we refresh the page again and again, because of the timing the server processes the requests vary for different ids
//So to ensure the positions of cards that id =2 should come in first and 10 should come in last ,in  a certain manner, then u have to use callback functions

//Pyramid of Dooms
//multiple callback functions inside a callback function
// // function(callback){
//   function(callback){
//   function(callback){
  
// } 
// } 

// } 
//It is also known as callback hell.. we will be actually trapped in callback hell if one requests fails we 'll not be able to debug and read them.
//The above code which we have wrote about the userCard it contains the callback function for req1 and inside this req2.
//to eliminate the callback hell,promises were introduced.
//We can perform promises using fetch API, fetch API is a modern way to actually fetch something from the server and a simpler syntax to solve such problems