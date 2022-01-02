
var form = document.getElementById('mForm');

form.addEventListener('submit', sendData);

function sendData(event) {
    event.preventDefault();

    var namo = document.getElementById('namo').value;
    var nama = document.getElementById('nama').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    const deta = document.getElementById('det');
    const dete = document.getElementById('dat');


    var params = JSON.stringify({
        nama,
        namo,
        password,
        email,
        confirmPassword
    });
    

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
            }else if(password != confirmPassword){
                deta.innerHTML= 'password and confirm Password are not the same'
            }
             else {
                 
                deta.innerHTML = `
    
            <br>
            <div>Firstname:${data.nama}</div>
            <div>Lastname:${data.namo}</div>
            <div>Email: ${data.email}</div>
            <div>password: ${data.password}</div>
             <br>
             `

                console.log(data);
            }



        })





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


