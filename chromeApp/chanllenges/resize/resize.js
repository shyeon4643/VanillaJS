import "../resize/resize.css";

function handleResize() {
    if (window.innerWidth <= 400) {
      document.body.style.backgroundColor = "#7e57c2";
    } else if (window.innerWidth > 400 && window.innerWidth <= 800) {
      document.body.style.backgroundColor = "#ec407a";
    } else {
      document.body.style.backgroundColor = "#42a5f5";
    }
  }
  window.addEventListener("resize", handleResize);