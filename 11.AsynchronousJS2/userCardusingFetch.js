const divEle = document.querySelector(".card-container");

function getDetails(id) {
//   const request = fetch(`https://dummyjson.com/users/${id}`);
//   //console.log(request);

//   const response = request.then((response) => {
//     // console.log(response.status);
//     return response.json();
//   });
//   //json is also an asynchronous func that's why we have used .then again on the response to get the user out of the data.
//   response.then((user) => console.log(user));

  //The above code is lengthier.. so we can chain the promises together to make the code compact.
  fetch(`https://dummyjson.com/users/${id}`)
    .then((response) => {
      // console.log(response.status);
      if(!response.ok){
        //creating own error message or handling errors
        throw new Error("Id does not match any data");
      }
      return response.json();
    })
    .then((user) => console.log(user))
    .catch((err) => console.error(err));
}
getDetails(0);
