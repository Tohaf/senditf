
    var form = document.getElementById('myForm');

    form.addEventListener('submit', sendData);

    function sendData(e) {
        e.preventDefault();

        var name = document.getElementById('name').value;
        var password = document.getElementById('pas').value;
        var email = document.getElementById('mail').value;
        var destination = document.getElementById('des').value;
        var location = document.getElementById('location').value;
        var status = document.getElementById('status').value;

        var params = JSON.stringify({
            "name": name,
            "password": password,
            "email": email,
            "destination": destination,
            "location": location,
            "status": status
        });

        var val = params;

        const XHR = new XMLHttpRequest();

        XHR.open('POST', ' https://web-app-senditb.herokuapp.com/parcel', true);

        XHR.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        
        XHR.onload = function () {

            var out = this.responseText;
           
            var display = document.getElementById('dis');

            let neti = out;

            display.innerHTML = `
            <br>
            <div>${neti}</div>
            <br>
            <div>Name: ${name}</div>
            <div>Destination: ${destination}</div>
            <div>Location: ${location}</div>
            <div>password:  ${password}</div>
            <div>Email:  ${email}</div>
            <div>Status:  ${status}</div>
             <br>
             ` 


            console.log(neti);

        };    
      
        XHR.send(val);

    }








