const colors = ["#7e57c2","#ec407a","#42a5f5","#ffee58"];

const h2 = document.querySelector("h2");
const superEventHandler = {
handleResize: function(){
    h2.innerHTML = "You just resized!";
    h2.style.color=colors[3];
},
handleClick: function(){
    h2.innerHTML = "That was a right click!";
    h2.style.color = colors[0];
},
onMouse: function(){
    h2.innerHTML = "The mouse is here!";
    h2.style.color = colors[1];
},
offMouse: function(){
    h2.innerHTML = "The mouse is gone!";
    h2.style.color=colors[2];
}
};
    h2.addEventListener("click",superEventHandler.handleClick);
    h2.addEventListener("mouseover",superEventHandler.onMouse);
    h2.addEventListener("mouseleave",superEventHandler.offMouse);
    window.addEventListener("resize",superEventHandler.handleResize);
