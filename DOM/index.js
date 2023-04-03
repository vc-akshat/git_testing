document.getElementById("submit").onclick = function(){
    document.getElementById("table").style.display = "block";

    var add = document.getElementById("table");
    var row = add.insertRow(-1);
    var fname = row.insertCell(0);
    var lname = row.insertCell(1);
    var age = row.insertCell(2);

    fname.innerHTML = document.getElementById("fname").value;
    lname.innerHTML = document.getElementById("lname").value;
    age.innerHTML = document.getElementById("age").value;

    return false;
}

document.getElementById('delete').onclick = function(){
    document.getElementById('table').deleteRow(-1)
}