// @ts-nocheck
const CONSONANTS = "bcdfghjklmnpqrstvwxyz";
const VOWELS = "aeiou";

function getRandomCharacter(characters) {
  return characters.charAt(Math.floor(Math.random() * characters.length));
}

function generateGroup(firstParam, secondParam) {
  return (
    getRandomCharacter(firstParam) +
    getRandomCharacter(secondParam) +
    getRandomCharacter(firstParam) +
    getRandomCharacter(firstParam) +
    getRandomCharacter(secondParam) +
    getRandomCharacter(firstParam)
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
