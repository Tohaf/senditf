var form = document.getElementById('myDestination');

var display = document.getElementById('getDestine');


form.addEventListener('submit', sendData);

function sendData(e) {
    e.preventDefault();

    var destination = document.getElementById('myDestine').value;
    var id = document.getElementById('id').value;

    var params = JSON.stringify({

        "destination": destination,
        "id": id
    });

    var val = params;

    const XHR = new XMLHttpRequest();

    XHR.open('PUT', ' https://web-app-senditb.herokuapp.com/parcel/'+id+'/destination', true);

    XHR.onload = function () { 

        var out1 = this.responseText;
        
        window.document.location = 'get.html';

        console.log(out1);

    };
    
    
    XHR.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    XHR.setRequestHeader('Method', 'PUT');

  
    XHR.send(val);

}
