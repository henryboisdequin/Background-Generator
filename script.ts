// Selecting HTML elements with querySelector & getElementById
const css = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.getElementById("gradient");
const random = document.querySelector(".random");


function setGraident(){
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

    css.textContent = body.style.background + ";";
}

function randomColor() {
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += Math.floor(Math.random() * 10);
        }
    return color;
}
    
function setRandomColor(){
    color1.value = randomColor(); 
    color2.value = randomColor();
    setGraident();
}

// Adding event listeners to fill background with chosen color
color1.addEventListener("input", setGraident);

color2.addEventListener("input", setGraident);

random.addEventListener("click", setRandomColor);
