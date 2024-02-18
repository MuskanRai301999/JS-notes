const buttonElement = document.querySelector(".button");

const textElement = document.querySelector("#text");

buttonElement.addEventListener("click", () => {
  textElement.textContent = "Button is pressed";

  //I want to vanish the text button is pressed after 2 sec
  setTimeout(()=>{
    //empty the text
    textElement.textContent ='';
  },2000);
});
