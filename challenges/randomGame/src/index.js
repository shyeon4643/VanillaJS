// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const h4 = document.querySelector("h4");
const userNum = document.querySelector(".userNum");
const input = document.querySelector("input");
const guessNum = userNum.querySelector(".guessNum");
const result = document.querySelector(".result");
const result2 = document.querySelector(".result2");
const btn = userNum.querySelector(".playButton");

function allResult(machine) {
  const user = `${guessNum.value}`;
  const randomNum = machine;
  result.innerText = `You chose: ${user}, the machine chose:${randomNum}`;
  if (parseInt(user) === randomNum) {
    result2.innerText = "You won!";
  } else {
    result2.innerText = "You lost!";
  }
}

function handleBtn(event) {
  event.preventDefault();
  function handleRan() {
    let max = `${input.value}`;
    const randomNum = Math.floor(Math.random() * max + 1);
    allResult(randomNum);
  }
  handleRan();
}

function paintNum() {
  h4.innerText = `Generate a number between 0 and ${input.value}`;
}

function init() {
  paintNum();
  // handleRan();
  input.addEventListener("change", paintNum);
  btn.addEventListener("click", handleBtn);
}

init();
