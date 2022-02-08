var pone1 = /^[\+]\d{10,}$/;
var form = document.getElementById('myForm');
var display1 = document.getElementById("diss");

form.addEventListener('submit', sendData);

function sendData(e) {
    e.preventDefault();

    var destination = document.getElementById('des').value;
    var location = document.getElementById('location').value;
    var recipient = document.getElementById('recipient').value;
    var phone = document.getElementById('phone').value;
    var name = localStorage.getItem('value')
    var email = localStorage.getItem('mail');
    var status = "ready for pickup";

    var params = JSON.stringify({
        "destination": destination,
        "location": location,
        "status": status,
        "name": name,
        "recipient": recipient,
        "phone": phone,
        "email": email


    });

    if(phone.match(pone1)){
        const result = fetch('https://web-app-senditb.herokuapp.com/parcel', {
            method: 'POST',
            body: (params),
            headers: {
                'Content-Type': 'application/json',
    
            }
        }).then(Response => Response.json())
            .then((data) => {
                
                    var display = document.getElementById('dis');
    
                    window.document.location = 'get.html';
                    display1.innerHTML = `Order successfully created ${data.name}`;
    
                    localStorage.setItem('value', data.name);
                    console.log(data.name);
    
    
                    console.log(data);
    
    
            })
    }else{
        alert('invalid phone number');
    }

}
