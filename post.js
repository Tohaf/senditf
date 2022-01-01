
var form = document.getElementById('myForm');

form.addEventListener('submit', sendData);

function sendData(e) {
    e.preventDefault();

    var status = document.getElementById('status');
    var destination = document.getElementById('des').value;
    var location = document.getElementById('location').value;
    var token = JSON.parse(localStorage.getItem('token'));
    var name = token.nama;
    var email = token.email;
    var status = localStorage.getItem('status');

    var params = JSON.stringify({
        "destination": destination,
        "location": location,
        "status": status,
        "token":token,
    
        
    });

    const result = fetch('http://localhost:5000/parcel', {
        method: 'POST',
        body: (params),
        headers: {
            'Content-Type': 'application/json',

        }
    }).then(Response => Response.json())
        .then((data) => {
            var display = document.getElementById('dis');
            window.document.location = 'get.html';
            display.innerHTML = `
        
                <br>
                <div>username:${data.name}</div>
                <div>email:${data.email}</div>
                <div>destination:${data.destination}</div>
                <div>Location:${data.location}</div>
                <div>status: ${data.status} </div>
                <div>id: ${data._id}</div>
                 <br>
                 `

            console.log(data);
          
        
    
    
    
        })


}
/*
        var val = params;

        const XHR = new XMLHttpRequest();

        XHR.open('POST', 'http://localhost:5000/parcel', true);

        XHR.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        
        XHR.onload = function () {

            var out = this.responseText;
           
            var display = document.getElementById('dis');

            let neti = out;
        

            display.innerHTML = `
            <br>
            <br>
            <div>Destination:${out.destination}</div>
            <div>Location: ${location}</div>
            <div>Status: in progress</div>
             <br>
             ` 


            console.log(neti);

        };    
      
        XHR.send(val);
*/









