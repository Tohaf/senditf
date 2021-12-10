
var form = document.getElementById('mForm');

form.addEventListener('submit', sendData);

function sendData(e) {
    e.preventDefault();

    var firstname = document.getElementById('firstname').value;
    var lastname = document.getElementById('lastname').value;
    var email = document.getElementById('email').value;
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;


    var params = JSON.stringify({
        "firstname": firstname,
        "lastname": lastname,
        "password": password,
        "email": email,
        "username": username
    });

    var vali = params;

    const XHR = new XMLHttpRequest();

    XHR.open('POST', ' http://localhost:5000/register/pass', true);

    XHR.setRequestHeader('Content-Type', 'applicaion/json; charset=UTF-8');
    XHR.setRequestHeader('authorisation',   'Bearer ' + username.accessToken);

    XHR.onload = function () {
        const value = this.responseText;

        const deta = document.getElementById('det');

        deta.innerHTML = `
        <br>
        <div>${value}</div>
        <div>Username: ${username}</div>
        <div>Firstname:${firstname}</div>
        <div>Lastname:${lastname}</div>
        <div>Password: ${password}</div>
        <div>Email: ${email}</div>
         <br>
         `

        console.log(value);
    };

   

    XHR.send(vali);

}


