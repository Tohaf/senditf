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

    XHR.open('PUT', 'https://web-app-senditb.herokuapp.com/api/v1/parcels/'+id+'/presentLocation', true);
    XHR.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    XHR.setRequestHeader('Method', 'PUT');


    XHR.onload = function () { 

        var out1 = this.responseText;
        window.document.location = 'get.html';
        

        console.log(out1);
       

    };

  
    XHR.send(val);

}