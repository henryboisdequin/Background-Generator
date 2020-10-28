// Get the first element in the document with _
const css = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const random = document.querySelector(".random-button");

// Getting the body colors by the id of gradient
const body = document.getElementById("gradient");

// Function to set the gradient once changed
function setGraident() {
  // create the css
  body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
  // put the css of background on the screen
  css.textContent = `${body.style.background};`;
}

// Function to get a random color
function randomColor() {
  // create color variable
  let color = "#"; // hex color
  for (let i = 0; i < 6; i++) {
    // for 6 times add a random number to the color variable
    color += Math.floor(Math.random() * 10);
  }
  // return the random color
  return color;
}

function setRandomColor() {
  // function to set the random color
  color1.value = randomColor();
  color2.value = randomColor();
  setGraident();
}

// Every time first parameter changes, call this function
color1.addEventListener("input", setGraident);

color2.addEventListener("input", setGraident);

random.addEventListener("click", setRandomColor);
