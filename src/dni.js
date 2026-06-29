const DNI_LETTERS = "TRWAGMYFPDXBNJZSQVHLCKE";

export function calculateDniLetter(value) {
  const num = Number(value);

  if(num < 0) {
    return null;
  }
  
  const remainder = num % 23;

  return DNI_LETTERS[remainder];
}