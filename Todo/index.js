
let inputList = document.getElementById('inputList');
let submitBtn = document.getElementById('submitData');
let diaplayRecord = document.getElementById('diaplayRecord')

userName = [] || JSON.parse(localStorage.getItem("name"))

displayData();
submitBtn.addEventListener("click",()=>{
    let name = inputList.value;
    userName.push({
        "name" : name,
    })
    console.log(name)
    saveData(userName)
    displayData();
})

function generateId(){
    return new Date().getTime()
}
function saveData(){
    localStorage.setItem("name",JSON.stringify(userName))
}

function displayData(){
    let str = ''
    userName.forEach((data, i) => {
        str += `<li>${data.name}</li>
        <button onclick="deleteData(${i})">delete</button>`
    });
    diaplayRecord.innerHTML = str;
}

function deleteData(id){
    console.log(id)
}
