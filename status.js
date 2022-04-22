var form = document.getElementById('myStatus');

var display = document.getElementById('locate');

form.addEventListener('submit', sendData);

function sendData(e) {
    e.preventDefault();

    var status = document.getElementById('status').value;
    var id = localStorage.getItem('ids');
    var gets = localStorage.getItem('sta')

    var params = JSON.stringify({

        "status": status,
        "id": id

    });

    var val = params;
    
    if (gets == 'ready for pickup' || gets === 'transit') {

        const XHR = new XMLHttpRequest();

        XHR.open('PUT', 'https://web-app-senditb.herokuapp.com/api/v1/parcels/' + id + '/status', true);
        XHR.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        XHR.setRequestHeader('Method', 'PUT');


        XHR.onload = function () {

            var out1 = this.responseText;
            window.document.location = 'getall.html';

            console.log(out1);
            localStorage.setItem('status', out1.status);

        };


        XHR.send(val);
    }
    else if(gets === 'delivered'){
        alert('cannot update status as its already delivered');
        window.document.location = 'getall.html';
    }
    else{
        alert('cannot update status as its already cancelled');
        window.document.location = 'getall.html';
    }



}