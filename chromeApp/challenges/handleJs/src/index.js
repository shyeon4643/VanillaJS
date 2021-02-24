// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
const colors = ["#7e57c2", "#ec407a", "#42a5f5", "#ffee58"];

const h2 = document.querySelector("h2");

function handleResize() {
  h2.innerHTML = "You just resized!";
  h2.style.color = colors[3];
}
function handleClick() {
  h2.innerHTML = "That was a right click!";
  h2.style.color = colors[0];
}
function onMouse() {
  h2.innerHTML = "The mouse is here!";
  h2.style.color = colors[1];
}
function offMouse() {
  h2.innerHTML = "The mouse is gone!";
  h2.style.color = colors[2];
}

const superEventHandler = {
  click: h2.addEventListener("click", handleClick),
  mouseOver: h2.addEventListener("mouseover", onMouse),
  mouseleave: h2.addEventListener("mouseleave", offMouse),
  resize: window.addEventListener("resize", handleResize)
};
