var data = {
    "India" : {"Gujarat" : ["Ahmedabad", "Mehsana", "Surat"],
               "Delhi" : ["New Delhi","Old Delhi"],
               "Rajasthan" : ["Udaipur","Jaipur", "Jodhpur"]},
    "USA" : {"California" : ["Los Angeles", "San Diego", "Fontana"],
               "Washington" : ["Renton","Yakima"],
               "New york" : ["Huntington","Greece", "Yonkers"]},
    "Canada" : {"Ontario" : ["Toronto", "Ottawa", "Kingston"],
               "Nova Scotia" : ["Truro","Kentville"],
               "British Columbia" : ["Vancouver","Victoria", "Abbotsford"]},
}

let country = document.getElementById('country')
let state = document.getElementById('state')
let district = document.getElementById('district')


function displaycountry(){
    let country = "";
    for (var countrydata in data){
        country += `<option value="${countrydata}">${countrydata}</option>`;
    }
    
    document.getElementById("country").innerHTML += country;
}
displaycountry()

function displaystate(){
    let state = "";
    selectcountry = document.getElementById('country').value
    for (var statedata in data[selectcountry]){  
        state += `<option value="${statedata}">${statedata}</option>`;
    }
    document.getElementById("state").innerHTML = state; 
}

function displaycity(){
    let district = "";
    selectstate = document.getElementById('state').value
    for (let districtdata of data[selectcountry][selectstate]){
        district += `<option value="${districtdata}">${districtdata}</option>`;
    }
    document.getElementById("district").innerHTML = district;
}

document.getElementById("submit").onclick = function(){

    var add = document.getElementById("table");
    var row = add.insertRow(-1);
    var country = row.insertCell(0);
    var state = row.insertCell(1);
    var district = row.insertCell(2);

    country.innerHTML = document.getElementById("country").value;
    state.innerHTML = document.getElementById("state").value;
    district.innerHTML = document.getElementById("district").value;
}