const task=document.getElementById("input");
const list=document.getElementById("list-container");

function AddTask(){
    if(task.value===''){
        alert("you need to enter some task");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=task.value;
        list.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
        saveData();
    }
}
list.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }

},false);
function saveData(){
    localStorage.setItem("data",list.innerHTML);
}
function showData(){
    list.innerHTML=localStorage.getItem("data");
}
showData();