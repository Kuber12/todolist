let checkboxes = document.querySelectorAll('input[type=checkbox]');
let formcontrol = document.getElementsByClassName("form-control");
let insValue = document.getElementsByClassName("ins-val");

let insAdd;
let insTrash;
let insArea;

let listEdit;
let listTrash;

let form = document.querySelector("form");

let counter = 0;
var parts = window.location.search.substr(1).split("&");
var $_GET = {};
for (var ii = 0; ii < parts.length; ii++) {
    var temp = parts[ii].split("=");
    $_GET[decodeURIComponent(temp[0])] = decodeURIComponent(temp[1]);
}
let listItem = function(value,counter){  
    let checked = "";
    let checkbox_concat = 'checkbox' + counter;
    if($_GET[checkbox_concat] == 'on'){
        checked = "checked";
    }
    return `<div class="list-item">
        <label class="form-control">
            <input type="checkbox" class="tick" name="checkbox${counter}" ${checked}>
            <span class="ins-val">${value}</span>
        </label>
        <a class="list-edit" value="${counter}"><i class="fa fa-pencil" aria-hidden="true"></i></a>
        <a class="list-trash" value="${counter}"><i class="fa fa-trash" aria-hidden="true"></i></a>
    </div>`;
};
localStorage.getItem(0)?null:localStorage.clear();


listRefresh();

for(let i=0;i<checkboxes.length;i++){
    if(checkboxes[i].checked){
        alert("asdf");
        formcontrol[i].style.textDecoration = "line-through";
    }
    checkboxes[i].addEventListener("click",(event) =>{
        if(event.target.checked){
            formcontrol[i].style.textDecoration = "line-through";
        }else{
            formcontrol[i].style.textDecoration = "none";
        }
    })
}
let text = "";
let i = 0;
while (i < 10) {
  text += "<br> value is" +  localStorage.getItem(i);;
  i++;
}
function insertReset(){    
    insAdd = document.getElementById("ins-add");
    insTrash = document.getElementById("ins-trash");
    insArea = document.getElementById("ins-area");
}
function listRefresh(){
    counter = 0;
    if(localStorage.length){
        while(counter < localStorage.length){
            if(counter == 0){
                form.innerHTML = listItem(localStorage[counter],counter);
                counter++;
                continue;
            }
            form.innerHTML += listItem(localStorage[counter],counter);
            counter++;
        }
        form.innerHTML += `
        <div class="list-item insert">
        <label class="form-control">
            <input type="checkbox" name="checkbox" />
            <input type="text" placeholder="Add note here" id="ins-area">
        </label>
        <a id="ins-add"><i class="fa fa-add" aria-hidden="true"></i></a>
        <a id="ins-trash"><i class="fa fa-trash" aria-hidden="true"></i></a>
        </div>
        <input type="submit" value="Save Ticks">`;
        insertReset();
    }else{
        form.innerHTML = `
        <div class="list-item insert">
        <label class="form-control">
            <input type="checkbox" name="checkbox"/>
            <input type="text" placeholder="Add note here" id="ins-area">
        </label>
        <a id="ins-add"><i class="fa fa-add" aria-hidden="true"></i></a>
        <a id="ins-trash"><i class="fa fa-trash" aria-hidden="true"></i></a>
        </div>
        <input type="submit" value="Save Ticks">`;
        insertReset();
    }
   

    insAdd.addEventListener("click",() => {
        localStorage.setItem(counter,insArea.value);
        listRefresh();
    })
    insTrash.addEventListener("click",() => {
        insArea.value = "";
    })


    listEdit = document.getElementsByClassName("list-edit");
    listTrash = document.getElementsByClassName("list-trash");

    for (let i = 0; i < listEdit.length; i++) {
        listEdit[i].addEventListener("click",function(){
            alert();
        });
        listTrash[i].addEventListener("click",function(){
            localStorage.removeItem(i);
            if(listEdit.length-1 != i){
                for(i;i<localStorage.length;i++){
                    localStorage.setItem(i,localStorage.getItem(i+1));
                }
                localStorage.removeItem(i-1);
            }
            listRefresh();
        });
    }
}