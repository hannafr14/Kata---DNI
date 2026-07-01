import { calculateDniLetter } from "./dni.js";

const introSection = document.querySelector("#intro-section");
const calculatorSection = document.querySelector("#calculator-section");
const finishedSection = document.querySelector("#finished-section");

const startButton = document.querySelector("#start-button");
const cancelButton = document.querySelector("#cancel-button");
const newCalculationButton = document.querySelector("#new-calculation-button");
const finishButton = document.querySelector("#finish-button");
const restartButton = document.querySelector("#restart-button");
const backButton = document.querySelector("#back-button");
const resultBackButton = document.querySelector("#result-back-button");

const resultSection = document.querySelector("#result-section");

const dniInput = document.querySelector("#dni-input");
const errorMessage = document.querySelector("#error-message");
const calculateButton = document.querySelector("#calculate-button");

const resultLetter = document.querySelector("#result-letter");
const resultDni = document.querySelector("#result-dni");
const resultDescription = document.querySelector("#result-description");

const dniCounter = document.querySelector("#dni-counter");
const inputWrapper = document.querySelector(".input-wrapper");

function showError() {
  errorMessage.hidden = false;
  inputWrapper.classList.add("is-error");
}

function hideError() {
  errorMessage.hidden = true;
  inputWrapper.classList.remove("is-error");
}

function resetDniInput() {
  dniInput.value = "";
  dniCounter.textContent = "0/8";
  hideError();
}

startButton.addEventListener("click", () => {
  introSection.hidden = true;
  calculatorSection.hidden = false;
});

backButton.addEventListener("click", () => {
  calculatorSection.hidden = true;
  introSection.hidden = false;

  resetDniInput();
});

resultBackButton.addEventListener("click", () => {
  resultSection.hidden = true;
  calculatorSection.hidden = false;
});

cancelButton.addEventListener("click", () => {
  calculatorSection.hidden = true;
  finishedSection.hidden = false;
});

calculateButton.addEventListener("click", () => {
  const isValidInput = validateDniInput();

  if (!isValidInput) {
    return;
  }

  const dniNumber = dniInput.value;
  const letter = calculateDniLetter(dniNumber);

  if (letter === null) {
    showError();
    return;
  }

  hideError();

  resultLetter.textContent = letter;
  resultDni.textContent = `${dniNumber} - ${letter}`;
  resultDescription.textContent = `Calculada con el algoritmo oficial:\n${dniNumber} mod 23 da como resultado ${letter}.`;

  calculatorSection.hidden = true;
  resultSection.hidden = false;
});

newCalculationButton.addEventListener("click", () => {
  resultSection.hidden = true;
  calculatorSection.hidden = false;

  resetDniInput();
});

finishButton.addEventListener("click", () => {
  resultSection.hidden = true;
  finishedSection.hidden = false;
});

restartButton.addEventListener("click", () => {
  finishedSection.hidden = true;
  introSection.hidden = false;

  resetDniInput();
});

function validateDniInput() {
  const dniValue = dniInput.value;
  const hasOnlyNumbers = /^\d*$/.test(dniValue);
  const hasValidLength = dniValue.length <= 8;

  dniCounter.textContent = `${dniValue.length}/8`;

  if (!hasOnlyNumbers || !hasValidLength) {
    showError();
    return false;
  }

  hideError();
  return true;
}

dniInput.addEventListener("input", validateDniInput);
