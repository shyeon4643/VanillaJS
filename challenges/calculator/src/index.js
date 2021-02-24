// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const result = document.querySelector(".result");
const numBtns = document.querySelectorAll(".number");
const operBtns = document.querySelectorAll(".operator");
const resetBtn = document.querySelector(".reset");
const equalBtn = document.querySelector(".equal");

let lists = [0];
let res_num = 0;
let n = 0;

function handleReset() {
  res_num = 0;
  lists = [0];
  n = 0;
  result.innerHTML = 0;
}

function handleEqual(event) {
  n = n + 1;
  const val = parseInt(result.textContent);

  for (let x = lists.length + 1; x > 0; x--) {
    if (lists[x] === "+") {
      res_num = res_num + val;
      result.innerHTML = res_num;
      break;
    } else if (lists[x] === "-") {
      result.innerHTML = res_num - val;
      res_num = res_num - val;
      break;
    } else if (lists[x] === "*") {
      result.innerHTML = res_num * val;
      res_num = res_num * val;
      break;
    } else if (lists[x] === "/") {
      result.innerHTML = res_num / val;
      res_num = res_num / val;
      break;
    }
  }
  lists.push(event.target.value);
}

function handleDivision(event) {
  const operator = event.target.value;
  const val = parseInt(result.textContent);

  lists.push(operator);
  n = n + 1;
  let numOperator = 0;

  for (let x = 0; x < lists.length + 1; x++) {
    if (lists[x] === "/") {
      numOperator = numOperator + 1;
    }
  }

  for (let x = lists.length; x > 0; x--) {
    if (numOperator === 1) {
      res_num = val;
      break;
    } else {
      res_num = res_num / val;
      break;
    }
  }

  for (let x = 0; x < n; x++) {
    if (typeof lists[x] === typeof "/") {
      result.innerHTML = res_num;
      break;
    } else {
      result.innerHTML = val;
    }
  }
}

function handleMultiply(event) {
  const operator = event.target.value;
  const val = parseInt(result.textContent);

  lists.push(operator);
  n = n + 1;

  let numOperator = 0;

  for (let x = 0; x < lists.length + 1; x++) {
    if (lists[x] === "*") {
      numOperator = numOperator + 1;
    }
  }

  for (let x = lists.length; x > 0; x--) {
    if (numOperator === 1) {
      res_num = val;
      break;
    } else {
      res_num = res_num * val;
      break;
    }
  }

  for (let x = 0; x < n; x++) {
    if (typeof lists[x] === typeof "*") {
      result.innerHTML = res_num;
      break;
    } else {
      result.innerHTML = val;
    }
  }
}

function handleMinus(event) {
  const operator = event.target.value;
  const val = parseInt(result.textContent);
  lists.push(operator);
  n = n + 1;

  let numOperator = 0;
  for (let x = 0; x < lists.length + 1; x++) {
    if (lists[x] === "-") {
      numOperator = numOperator + 1;
    }
  }

  for (let x = lists.length; x > 0; x--) {
    if (numOperator === 1) {
      res_num = val;
      break;
    } else {
      res_num = res_num - val;
      break;
    }
  }

  for (let x = 0; x < n; x++) {
    if (typeof lists[x] === typeof "-") {
      result.innerHTML = res_num;
      break;
    } else {
      result.innerHTML = val;
    }
  }
}

function handlePlus(event) {
  const operator = event.target.value;
  const val = parseInt(result.textContent);

  lists.push(operator);
  n = n + 1;
  if (typeof lists[n - 1] === typeof 3) {
    res_num = res_num + val;
  }

  for (let x = 0; x < n; x++) {
    if (typeof lists[x] === typeof "+") {
      result.innerHTML = res_num;
      break;
    } else {
      result.innerHTML = val;
    }
  }
}

function handleNumber(event) {
  const num = parseInt(event.target.value);

  lists.push(num);
  n = n + 1;

  if (n - 1 === 0 || typeof lists[n - 1] === typeof "/") {
    result.innerHTML = num;
  } else {
    result.append(num);
  }
}

function init() {
  numBtns.forEach(function (numBtn) {
    numBtn.addEventListener("click", handleNumber);
  });

  operBtns.forEach(function (operBtn) {
    if (operBtn.value === "+") {
      operBtn.addEventListener("click", handlePlus);
    } else if (operBtn.value === "-") {
      operBtn.addEventListener("click", handleMinus);
    } else if (operBtn.value === "*") {
      operBtn.addEventListener("click", handleMultiply);
    } else {
      operBtn.addEventListener("click", handleDivision);
    }
  });

  equalBtn.addEventListener("click", handleEqual);
  resetBtn.addEventListener("click", handleReset);
}

init();
