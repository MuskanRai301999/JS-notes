//We have implemented the code using FETCH promise based API.. there is a more better or modular way to make our code more understandable using async-await keywords.

//Asysnc is a keyword which is used before a function where await can be implemented.
//so await is a functionality  which helps us implement asynchronous operations that is promise based operations

//while fetching the data is succesful or whenever we retrieve the data from the server then only then keyword is used and then whatever operation we have given in the then it will be retrieved there.
//BUt instead of using then ,I can just ask Javascript to wait for the operation to complete till it is fetching the data from the server.It will wait for it .
//So await is the keyword to use before the fetch..while creating the function or defining the function we have to mention it earlier that this function contains await.
//And i can notify that using a special keyword async in front of the function it will not throw me any error.
//So now javascript knows that here some asynchronous function is going to happen that's why i have put async here and I 'm able to use await.
//So await is actually equivalent to .then
//In async-await the errors can be handled by try-catch block

const divEle = document.querySelector(".card-container");

async function getDetails(id) {
  try {
    const response = await fetch(`https://dummyjson.com/users/${id}`);
    if (!response.ok) {
      throw new Error("No Data present");
    }
    const userdata = await response.json();
    displayUser(userdata, "beforeend");
  } catch (err) {
    console.log(err);
  }
}

function displayUser(data, pos, className = "") {
  const card = `<div class="user-card ${className}">
          <img src=${data.image} alt="Profile Image" />
          <h3>${data.firstName} </h3>
          <h3>${data.lastName}</h3>
          <p class="email">${data.email}</p>
          <button class="btn">View Profile</button>
          </div>`;

  divEle.insertAdjacentHTML(pos, card);
}

getDetails(0);
