// import "../todoList/todo.css";

const planForm = document.querySelector(".js-plan"),
planInput = planForm.querySelector("input"),
pendingList = document.querySelector(".js-pendingList"),
finishedList = document.querySelector(".js-finishedList");

const PLANS_LS = "Pending";
const FINISHED_LS="Finished";

let plans = [];
let plans2 = [];

function pending(){
 localStorage.setItem(PLANS_LS,JSON.stringify(plans));
}


function finished(){
localStorage.setItem(FINISHED_LS, JSON.stringify(plans2));
}

function deletePlans(event){
const btn = event.target;
const li = btn.parentNode;
pendingList.removeChild(li);
const cleanPlans = plans.filter(function(plan){
    return plan.id !== parseInt(li.id);
});
plans=cleanPlans
pending();
}

function deletePlans2(event){
    const btn2 = event.target;
    const li2 = btn2.parentNode;
    finishedList.removeChild(li2);
    const cleanPlans2 = plans2.filter(function(Plan){
        return plan.id !== parseInt(li2.id);
    })
    plans2=cleanPlans2;
    finished();
}

function checkYourPlans(event){
const checkBtn = event.target;
const checkLi= checkBtn.parentNode;
pendingList.removeChild(checkLi);

const span = checkLi.querySelector("span");
const span3 = span.innerText;

const cleanPlans = plans.filter(function(plan){
    return plan.id !== parseInt(checkLi.id);
});
plans = cleanPlans;
finished()
paintFinished(span3);
}

function againPlan(event){
    const btn = event.target;
    const li = btn.parentNode;
    finishedList.removeChild(li);
    
    const span = li.querySelector("span");
    const span2 = span.innerText;

    const cleanPlans2 = plans2.filter(function(plan){
        return plan.id !== parseInt(li.id);
    })
    plans2 = cleanPlans2;
    pending();
    paintPending(span2);
}

function paintPending(text){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const checkBtn = document.createElement("button");
    const delBtn = document.createElement("button");
    delBtn.innerHTML="❌";
    delBtn.addEventListener("click",deletePlans)
    checkBtn.innerHTML="✔";
    checkBtn.addEventListener("click",checkYourPlans);
    const newId = plans.length+1;
    span.innerText=text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.appendChild(checkBtn); 
   
    li.id = newId;
    
    pendingList.appendChild(li);
    const planObj = {
        text:text,
        id: newId
    }
    plans.push(planObj);
    pending();
}

function paintFinished(text){
    const li2 = document.createElement("li");
    const span2 = document.createElement("span")
    const delBtn2 = document.createElement("button");
    const againBtn = document.createElement("button");
    delBtn2.innerHTML="❌";
    delBtn2.addEventListener("click",deletePlans2)
    againBtn.innerHTML="🔙"
    againBtn.addEventListener("click",againPlan);
    const newId = plans.length+1;
    span2.innerText=text;
    li2.appendChild(span2);
    li2.appendChild(delBtn2);
    li2.appendChild(againBtn);
    li2.id = newId
    finishedList.appendChild(li2);
    
    const planObj2 = {
        text:text,
        id: newId
    };

    plans2.push(planObj2);
    finished();

}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = planInput.value;
    paintPending(currentValue);
    planInput.value = "";
}

function loadPlans(){
    const loadedPlans = localStorage.getItem(PLANS_LS);
    const loadedPlans2 = localStorage.getItem(FINISHED_LS);

    if(loadedPlans !==null){
        const parsedPlan = JSON.parse(loadedPlans);
        parsedPlan.forEach(function(plan){
            paintPending(plan.text)
        });
    }
    if(loadedPlans2 !== null){
        const parsedPlan2 = JSON.parse(loadedPlans2);
        parsedPlan2.forEach(function(plan){
            paintFinished(plan.text)
        })
    }
}

function init(){
    loadPlans();
    planForm.addEventListener("submit",handleSubmit);
}

init();