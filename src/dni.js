const DNI_LETTERS = "TRWAGMYFPDXBNJZSQVHLCKE";

export function calculateDniLetter(value) {
  const num = Number(value);
  const remainder = num % 23;

  return DNI_LETTERS[remainder];
}