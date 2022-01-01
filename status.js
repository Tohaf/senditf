var form = document.getElementById('myStatus');

var display = document.getElementById('locate');

form.addEventListener('submit', sendData);

function sendData(e) {
    e.preventDefault();

    var status = document.getElementById('status').value;
    var id = document.getElementById('Ref').value;

    var params = JSON.stringify({

        "status": status,
        "id":id
        
    });

    var val = params;

    const XHR = new XMLHttpRequest();

    XHR.open('PUT', 'http://localhost:5000/parcel/'+id+'/status', true);
    XHR.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    XHR.setRequestHeader('Method', 'PUT');


    XHR.onload = function () { 

        var out1 = this.responseText;
        window.document.location = 'get.html';

        console.log(out1);
        localStorage.setItem('status', out1.status);
        
    };

  
    XHR.send(val);

}