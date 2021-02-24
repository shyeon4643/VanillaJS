import "./styles.css";

const clockContainer = document.querySelector(".clock");
const clockTitle = clockContainer.querySelector("h2");

// You're gonna need this
// const NINE_HOURS_MILLISECONDS = 32400000;

function getTime() {
  // Don't delete this.
  const xmasDay = new Date("2021-12-24:00:00:00+0900");
  const now = new Date();
  const distance = xmasDay - now;
  const days = Math.floor(distance / (24 * 60 * 60 * 1000), 10);
  const hours = Math.floor((distance / (60 * 60 * 1000)) % 24, 10);
  const minutes = Math.floor((distance / (60 * 1000)) % 60, 10);
  const seconds = Math.floor((distance / 1000) % 60, 10);
  clockTitle.innerText = `${days < 10 ? `0${days}` : days}D ${
    hours < 10 ? `0${hours}` : hours
  }H ${minutes < 10 ? `0${minutes}` : minutes}M ${
    seconds < 10 ? `0${seconds}` : seconds
  }S`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();
