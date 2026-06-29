const DNI_LETTERS = "TRWAGMYFPDXBNJZSQVHLCKE";

export function calculateDniLetter(value) {
  const num = Number(value);

  if (Number.isNaN(num) || num < 0 || num > 99999999) {
    return null;
  }

  const remainder = num % 23;

  return DNI_LETTERS[remainder];
}