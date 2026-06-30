import { calculateDniLetter } from "./dni.js";

const introSection = document.querySelector("#intro-section");
const calculatorSection = document.querySelector("#calculator-section");
const finishedSection = document.querySelector("#finished-section");

const startButton = document.querySelector("#start-button");
const cancelButton = document.querySelector("#cancel-button");

const resultSection = document.querySelector("#result-section");

const dniInput = document.querySelector("#dni-input");
const errorMessage = document.querySelector("#error-message");
const calculateButton = document.querySelector("#calculate-button");

const resultLetter = document.querySelector("#result-letter");
const resultDni = document.querySelector("#result-dni");
const resultDescription = document.querySelector("#result-description");

startButton.addEventListener("click", () => {
    introSection.hidden = true;
    calculatorSection.hidden = false;
});

cancelButton.addEventListener("click", () => {
  calculatorSection.hidden = true;
  finishedSection.hidden = false;
});

calculateButton.addEventListener("click", () => {
  const dniNumber = dniInput.value;
  const letter = calculateDniLetter(dniNumber);

  if (letter === null) {
    errorMessage.hidden = false;
    return;
  }

  errorMessage.hidden = true;

  resultLetter.textContent = letter;
  resultDni.textContent = `${dniNumber} - ${letter}`;
  resultDescription.textContent = `Calculada con el algoritmo oficial: ${dniNumber} mod 23 → ${letter}.`;

  calculatorSection.hidden = true;
  resultSection.hidden = false;
});