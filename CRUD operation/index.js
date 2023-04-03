
display()

var userData = [];

function add() {
    let userData = JSON.parse(localStorage.getItem('Data'))

    let name = document.getElementById('name').value
    let age = document.getElementById('age').value
    let city = document.getElementById('city').value
    let state = document.getElementById('state').value
    let number = document.getElementById('number').value

    let u_id = parseInt(Math.random() * 100)
    data = {
        id: u_id,
        name: name,
        age: age,
        city: city,
        state: state,
        number: number,
    }
    userData.push(data)

    localStorage.setItem('Data', JSON.stringify(userData))
    display()
}

function display(data) {
    if (data) {
        data = data
    } else {
        data = JSON.parse(localStorage.getItem('Data'))
    }
    let str = ""
    data.forEach(value => {
        str += `<tr><td>${value.id}</td><td>${value.name}</td><td>${value.age}</td><td>${value.city}</td><td>${value.state}</td><td>${value.number}</td><td><button onclick="deleteuser(${value.id})">Delete</button></td><td><button onclick="edituser(${value.id})">Edit</button></td></tr>`
    });
    document.getElementById("table-body").innerHTML = str;
};


function editUser(id) {
    let data = JSON.parse(localStorage.getItem('Data'))
    data.find(value => {
        if (value.id == id) {
            document.getElementById('name').value = value.name
            document.getElementById('age').value = value.age
            document.getElementById('city').value = value.city
            document.getElementById('state').value = value.state
            document.getElementById('number').value = value.number
            document.getElementById('editbtn').innerHTML = `<button onclick="update(${value.id})">update</button>`
        }
    })
    console.log(data)
}

function update(id) {
    let data = JSON.parse(localStorage.getItem('Data'))

    let name = document.getElementById('name').value
    let age = document.getElementById('age').value
    let city = document.getElementById('city').value
    let state = document.getElementById('state').value
    let number = document.getElementById('number').value

    data.find(value => {
        if (value.id == id) {
            data.splice(data.indexOf(value), 1, { "id": id, "name": name, "age": age, "city": city, "state": state, "number": number })
        }
    })
    console.log(data)
    localStorage.setItem('Data', JSON.stringify(data))
    display()
}
function deleteUser(id) {
    let data = JSON.parse(localStorage.getItem('Data'))
    let deldata = data.filter(del => del.id != id)
    console.log(deldata)
    localStorage.setItem('Data', JSON.stringify(deldata))
    display()
}

let clicked = true;
function compare(key) {
    let data = JSON.parse(localStorage.getItem('Data'))
    if (clicked) {
        data.sort((a, b) => (a[key] > b[key]) ? 1 : ((b[key] > a[key]) ? -1 : 0))
    } else {
        data.sort((a, b) => (a[key] > b[key]) ? 1 : ((b[key] > a[key]) ? -1 : 0)).reverse()
    }
    clicked = !clicked;
    display(data)
}


