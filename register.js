
var form = document.getElementById('mForm');

form.addEventListener('submit', sendData);

function detectEmail(){
    var email = document.getElementById('email').value;
    const vall = "^[a-zA-ZO\\d]+@[a-zA-ZO]+\\.[A-Za-z]+$";
    const dis = document.getElementById('mail');

    if(email.match(vall)){
        dis.innerHTML = ""
    }else{
        dis.innerHTML = "Email not valid";
    }

}

function checkPassword (){
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var passwordSpace = document.getElementById('passwordSpace');

    if(password === confirmPassword){
        passwordSpace.innerHTML = ""
    }else{
        passwordSpace.innerHTML = "passwords not match";
    }

}

function phoneCheck(){
    var phone = document.getElementById('num').value;
    var pone1 = /^[\+]\d{10,}$/;
    var phoneCheck = document.getElementById('phoneCheck');

    if(phone.match(pone1)){
        phoneCheck.innerHTML = "";
    }else{
        phoneCheck.innerHTML = "phone format not valid";
    }

}

function sendData(event) {
    event.preventDefault();

    var namo = document.getElementById('namo').value;
    var nama = document.getElementById('nama').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('num').value;
    var address = document.getElementById('address').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    const deta = document.getElementById('det');
    const dete = document.getElementById('dat');
    var pone1 = /^[\+]\d{10,}$/;

    var params = JSON.stringify({
        nama,
        namo,
        password,
        email,
        address,
        phone,
        confirmPassword
    });
    

    if(phone.match(pone1)){
        const result = fetch('https://web-app-senditb.herokuapp.com/admin/pass', {
        method: 'POST',
        body: (params),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(Response => Response.json())
        .then((data) => {
            
            if (data.status == 'error') {
                deta.innerHTML = 'email already exsit/you already have an account kindly Login';
            }
            else if(password.length < 6){
                alert('password should be greater than 6 caracter');
            }
            else if(password != confirmPassword){
                deta.innerHTML= 'password and confirm Password are not the same'
            }
             else {

                localStorage.setItem('value', nama);
                localStorage.setItem('mail', email);

                window.document.location = 'get.html';

                deta.innerHTML = `
    
            <br>
            <div>sucessful, kindly Login</div>
            <div>Firstname:${data.nama}</div>
            <div>Lastname:${data.namo}</div>
            <div>Email: ${data.email}</div>
        
             <br>
             `

                console.log(data);
            }

        })

    }else{
        alert('invalid phone number');
    }

    

    /*
        const XHR = new XMLHttpRequest();
    
        XHR.open("POST", "http://localhost:5000/admin/pass");
    
        XHR.setRequestHeader("Content-Type", "Applicaion/json; charset=utf-8");
    
    
    
        XHR.onreadystatechange = function () {
            const value = this.responseText;
    
            const deta = document.getElementById('det');
    
            deta.innerHTML = `
            <br>
            <div>${value}</div>
            <div>Firstname:${nama}</div>
            <div>Lastname:${namo}</div>
            <div>Email: ${email}</div>
             <br>
             `
    
            console.log(value);
    
        };   
    
        XHR.send(params);
    */
}


