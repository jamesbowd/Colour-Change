const button = document.querySelector("button");
const background = document.querySelector(".container");

const colours = ["red", "green", "blue", "yellow", "pink", "purple"];

button.addEventListener("click", () => {
  const colour = Math.floor(Math.random() * colours.length);
  background.style.backgroundColor = colours[colour];
});
