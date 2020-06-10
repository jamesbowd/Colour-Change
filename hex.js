const button = document.querySelector("button");
const background = document.querySelector(".container");
const colourName = document.querySelector(".colour-name");

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

button.addEventListener("click", () => {
  let colour = "#";
  for (let i = 0; i < 6; i++) {
    const random = Math.floor(Math.random() * hex.length);
    colour += hex[random];
  }
  background.style.backgroundColor = colour;
  colourName.textContent = colour;
});
