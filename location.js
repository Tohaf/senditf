var form = document.getElementById('myLocation');

var display = document.getElementById('locate');

form.addEventListener('submit', sendData);

function sendData(e) {
    e.preventDefault();

    var location = document.getElementById('location').value;
    var id = document.getElementById('Ref').value;

    var params = JSON.stringify({

        "location": location,
        "id":id
        
    });

    var val = params;

    const XHR = new XMLHttpRequest();

    XHR.open('PUT', ' https://web-app-senditb.herokuapp.com/parcel/'+id+'/location', true);
    XHR.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    XHR.setRequestHeader('Method', 'PUT');


    XHR.onload = function () { 

        var out1 = this.responseText;
        
        display.innerHTML = out1;

        console.log(out1);

    };

  
    XHR.send(val);

}