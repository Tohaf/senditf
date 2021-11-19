
var form = document.getElementById('mForm');

form.addEventListener('submit', sendData);

function sendData(e) {
    e.preventDefault();

    var firstname = document.getElementById('Firstname').value;
    var lastname = document.getElementById('Lastname').value;
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

    XHR.open('POST', ' https://web-app-senditb.herokuapp.com/register/pass', true);

    XHR.setRequestHeader('Content-Type', 'applicaion/json; charset=UTF-8');

    XHR.onload = function () {
        const value = this.responseText;

        const deta = document.getElementById('det');

        deta.innerHTML = `
        <br>
        <div>${value}</div>
        <div>Username: ${username}</div>
        <divFirstname: >${firstname}</div>
        <divLastname: >${lastname}</div>
        <div>Password: ${password}</div>
        <div>Email: ${email}</div>
         <br>
         `

        console.log(value);
    };

   

    XHR.send(vali);

}

