// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const select = document.querySelector("select");

function saveCountry() {
  const value = select.options[select.selectedIndex].value;
  localStorage.setItem("country", value);
}

select.addEventListener("change", saveCountry);

function showing(){
    const country = localStorage.getItem("country");
    if(country !== null){
        select.setAttribute("value", country);
        select.value=country;
    }
}

showing();