const introSection = document.querySelector("#intro-section");
const calculatorSection = document.querySelector("#calculator-section");
const finishedSection = document.querySelector("#finished-section");

const startButton = document.querySelector("#start-button");
const cancelButton = document.querySelector("#cancel-button");

startButton.addEventListener("click", () => {
    introSection.hidden = true;
    calculatorSection.hidden = false;
});

cancelButton.addEventListener("click", () => {
  calculatorSection.hidden = true;
  finishedSection.hidden = false;
});