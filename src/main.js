const introSection = document.querySelector("#intro-section");
const calculatorSection = document.querySelector("#calculator-section");
const startButton = document.querySelector("#start-button");

startButton.addEventListener("click", () => {
    introSection.hidden = true;
    calculatorSection.hidden = false;
});