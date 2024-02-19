//! RANDOM PASSWORD GENERATOR

function generatePassword(
  length,
  includeLowerCase,
  includeUpperCase,
  includeNumbers,
  includeSymbols
) {
  const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
  const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*~:;_+-=/.,";

  let allowChars = "";
  let password = "";

  allowChars += includeLowerCase ? lowerCaseChars : "";
  allowChars += includeUpperCase ? upperCaseChars : "";
  allowChars += includeNumbers ? numberChars : "";
  allowChars += includeSymbols ? symbolChars : "";

  if (length <= 0) {
    return `(password length must be at least 1)`;
  }
  if (allowChars.length === 0) {
    return `(At least 1 set of characters needs to be selected)`;
  }

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allowChars.length);
    password += allowChars[randomIndex];
  }

  return password;
}

const passwordLength = 8;
const includeLowerCase = true;
const includeUpperCase = true;
const includeNumbers = true;
const includeSymbols = true;

let para = document.getElementById("para");
document.getElementById("pass").addEventListener("click", () => {
  const password = generatePassword(
    passwordLength,
    includeLowerCase,
    includeUpperCase,
    includeNumbers,
    includeSymbols
  );
  para.textContent = `${password}`;
});
document.getElementById("reset").addEventListener("click", () => {
  para.textContent = ``;
});
