//creating the frontend display and the calculation part in different files or modules
function displayArea(){
    const radius = parseFloat(
        document.getElementById('radius-input').value
);

const area =calculateArea(radius);
document.getElementById(
    'result'
).innerText =`The area is: ${area.toFixed(2)}`;
}
document 
  .getElementById('calculate-button')
  .addEventListener('click')
