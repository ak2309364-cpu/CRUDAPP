let username = document.getElementById('username');
let mobile = document.getElementById('mobile');
let form = document.getElementById('form');
let contacts = document.getElementById('all-contacts');
let arr = JSON.parse(localStorage.getItem('contacts')) || [];
let submit = document.getElementById("submit");

read();

let flag = null;

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let obj = {
        username : username.value,
        mobile : mobile.value
    }

    if(flag === null){

    arr.push(obj);
    localStorage.setItem('contacts',JSON.stringify(arr));
     read();
    } else {
        arr[flag].username = username.value;
        arr[flag].mobile = mobile.value;
        localStorage.setItem('contacts',JSON.stringify(arr));
       flag = null;

    }
    read();
});

// read
function read(){
 
    contacts.innerHTML = "";

    for(let i = 0; i<arr.length; i++){
        
        let div = document.createElement('div');
        div.innerHTML = `${arr[i].username} ${arr[i].mobile} <button onClick = "edit(${i})">Edit</button> <button onclick="Del(${i})">Delete</button>`
        contacts.appendChild(div);
    }
}

function edit(i){
    username.value = arr[i].username;
    mobile.value = arr[i].mobile;
    console.log("Editing...",  arr[i].mobile, "item");
    submit.innerText = "Update";
    flag = i;
};

function Del(i){
    console.log("Deleting the...", i);
    arr.splice(i,1);
    localStorage.setItem('contacts',JSON.stringify(arr));
    read();
}