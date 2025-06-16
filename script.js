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
  const input = document.getElementById("result-field");
  btn?.addEventListener("click", () => {
    input.value = generatePassword(groupsCount);
  });
}

actionClickingNumberBtn("btn-one", 1);
actionClickingNumberBtn("btn-two", 2);
actionClickingNumberBtn("btn-three", 3);

function copyPassword() {
  const input = document.getElementById("result-field");
  const copyBtn = document.querySelector(".copy-icon");
  const audio = new Audio("./assets/audio/3.mp3");

  copyBtn.addEventListener("click", async () => {
    if (!input.value) return;

    let copied = false;

    try {
      await navigator.clipboard.writeText(input.value);
      copied = true;
    } catch (err) {
      // fallback for IOS
      input.select();
      input.setSelectionRange(0, 99999);
      copied = document.execCommand("copy");

      alert("An error has occurred, please try again later.");
      console.error("The password could not be copied : " + err);
    }

    if (copied) {
      audio.currentTime = 0;
      audio.play();
      navigator.vibrate?.([10, 20, 10]);
      setTimeout(() => {
        confetti({
          particleCount: 200,
          spread: 90,
          origin: { y: 0.32 },
        });
      }, "200");
    }
  });
}

copyPassword();
