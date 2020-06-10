const button = document.querySelector("button");
const background = document.querySelector(".container");
const colourName = document.querySelector(".colour-name");

const colours = ["Red", "Green", "Blue", "Yellow", "Pink", "Purple", "Orange"];

button.addEventListener("click", () => {
  const colour = Math.floor(Math.random() * colours.length);
  background.style.backgroundColor = colours[colour];
  colourName.textContent = colours[colour];
});
