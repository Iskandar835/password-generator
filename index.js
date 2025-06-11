// @ts-nocheck
const CONSONANTS = "bcdfghjklmnpqrstvwxyz";
const VOWELS = "aeiou";

function getRandomCharacter(characters) {
  return characters.charAt(Math.floor(Math.random() * characters.length));
}

function getRandomUppercase(characters) {
  return getRandomCharacter(characters).toUpperCase();
}

function getRandomDigit() {
  return Math.floor(Math.random() * 10).toString();
}

function generateGroup(firstParam, secondParam) {
  return (
    getRandomUppercase(firstParam) +
    getRandomCharacter(secondParam) +
    getRandomCharacter(firstParam) +
    getRandomCharacter(firstParam) +
    getRandomCharacter(secondParam) +
    getRandomDigit()
  );
}

function generatePassword(groupsCount) {
  const groups = [];
  for (let i = 0; i < groupsCount; i++) {
    groups.push(generateGroup(CONSONANTS, VOWELS));
  }
  return groups.join("-");
}

function actionClickingNumberBtn(id, groupsCount) {
  const btn = document.getElementById(id);
  const input = document.querySelector(".result-field");
  btn?.addEventListener("click", () => {
    input.value = generatePassword(groupsCount);
  });
}

actionClickingNumberBtn("btn-one", 1);
actionClickingNumberBtn("btn-two", 2);
actionClickingNumberBtn("btn-three", 3);

// adresse pour tester les mots de passes
// https://nordpass.com/fr/secure-password/
