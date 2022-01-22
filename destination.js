var form = document.getElementById('myDestination');

var display = document.getElementById('getDestine');


form.addEventListener('submit', sendData);

function sendData(e) {
    e.preventDefault();

    var destination = document.getElementById('myDestine').value;

    var id = localStorage.getItem('idd');
    console.log(id)

    var dests = localStorage.getItem('dest');

    var params = JSON.stringify({

        "destination": destination,
        "id": id
    });

    var val = params;

    if (dests == 'ready for pickup' || dests === 'transit') {
        const XHR = new XMLHttpRequest();

        XHR.open('PUT', 'https://web-app-senditb.herokuapp.com/parcel/' + id + '/destination', true);

        XHR.onload = function () {

            var out1 = this.responseText;

            window.document.location = 'get.html'

            console.log(out1);

        };


        XHR.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        XHR.setRequestHeader('Method', 'PUT');


        XHR.send(val);
    }else if(dests === 'cancelled'){
        alert('destination cannot be updated, order already cancelled');
        window.document.location = 'get.html';
    }
    else{
        alert('destination cannot be updated, order already delivered');
        window.document.location = 'get.html';
    }

}
