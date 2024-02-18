const btn = document.createElement("button");
btn.textContent = "Click here";
btn.className = "btn1";

const division = document.querySelector("div");
division.appendChild(btn);

//deleting a node from DOM
document.querySelector("h2").remove();

//event-listeners
const p = document.querySelector("p");
p.addEventListener("click", function () {
  clickPara("Hello");
});

function clickPara(name) {
  console.log(name + "Para Clicked");
}
/*const btn = document.createElement("button");
btn.textContent = "Click here";
btn.className = "btn1";

const division = document.querySelector("div");
division.appendChild(btn);

//removing heading on the click of a button
btn.addEventListener("click", () => document.querySelector("h2").remove());

//Event Listener on Para

const p = document.querySelector("p");
p.addEventListener("mousedown", function () {
  p.style.backgroundColor = "yellow";
});
p.addEventListener("mouseup", function () {
  p.style.backgroundColor = "";
});

//keyboard Event
document.body.addEventListener("keydown", (event) => {
  console.log("keyPressed");
  console.log(event.keyCode);
});*/
