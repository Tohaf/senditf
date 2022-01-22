document.getElementById('show').style.display = 'none';


function getAllParcel() {

    var nameq = localStorage.getItem('value');
    var status = localStorage.getItem('status');
    document.getElementById('display').innerHTML = 'WELCOME ' + nameq;

    console.log(nameq);

    fetch('https://web-app-senditb.herokuapp.com/parcel/:id/search?name=' + nameq)
        .then(response => response.json())
        .then((out) => {


            for (var i in out) {


                var table = document.getElementById("head").getElementsByTagName("tbody")[0];
                var newRow = table.insertRow(table.length);
                cell1 = newRow.insertCell(0);
                cell1.innerHTML = `${out[i]._id}`;
                cell2 = newRow.insertCell(1);
                cell2.innerHTML = `${out[i].destination}`;
                cell3 = newRow.insertCell(2);
                cell3.innerHTML = `${out[i].location}`;
                cell4 = newRow.insertCell(3);
                cell4.innerHTML = `${out[i].status}`;
                cell5 = newRow.insertCell(4);
                cell5.innerHTML = `<a id="chec" onClick="updateDestination(this)">Update Destination</a>`;
                cell6 = newRow.insertCell(5);
                cell6.innerHTML = `<button onClick="cancelData(this)">Cancel</button>`;


                var row = table.rows.length;
                document.getElementById('order').innerHTML = row;
                /*
                <a  href="destination.html" id="chec" onClick="updateDestination(this)">Update Destination</a>
                update<input  type='checkbox' id='box'  onClick="updateDestination(this)">
                */

            }

        })
}


function updateDestination(td) {
    row = td.parentElement.parentElement;
    var mart = row.cells[0].innerHTML;
    var id = mart;
    localStorage.setItem('idd', id);

    var des = row.cells[3].innerHTML;
    localStorage.setItem('dest', des);

    if (des == 'ready for pickup' || des === 'transit') {

        document.getElementById('show').style.display = 'block';

        var form = document.getElementById('myDestination');

        form.addEventListener('submit', sendData);

        function sendData(e) {
            e.preventDefault();

            var destination = document.getElementById('myDestine').value;

            var params = JSON.stringify({

                "destination": destination,
                "id": id
            });

            var val = params;

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
        }

    }
    else if (des === 'cancelled') {
        alert('destination cannot be updated, order already cancelled');
        window.document.location = 'get.html';
    }
    else {
        alert('destination cannot be updated, order already delivered');
        window.document.location = 'get.html';
    }

}




function cancelData(td) {
    row = td.parentElement.parentElement;

    var mart = row.cells[0].innerHTML;
    var id = mart

    console.log(mart);

    var status = 'cancelled';

    var params = JSON.stringify({

        "status": status,
        "id": id

    });

    var val = params;

    if (row.cells[3].innerHTML == 'ready for pickup' || row.cells[3].innerHTML === 'On Transit') {

        const XHR = new XMLHttpRequest();

        XHR.open('PUT', 'https://web-app-senditb.herokuapp.com/parcel/' + id + '/status', true);
        XHR.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        XHR.setRequestHeader('Method', 'PUT');


        XHR.onload = function () {

            var out1 = this.responseText;
            window.document.location = 'get.html';


        };


        XHR.send(val);
    }
    else if (row.cells[3].innerHTML === 'delivered') {
        alert('cannot cancel order as its already delivered');
        window.document.location = 'get.html';
    } else {
        alert('cannot cancel order as its already cancelled');
        window.document.location = 'get.html';
    }

}








/*
    var xhr = new XMLHttpRequest();

    xhr.open('GET', ' http://localhost:5000/parcel/:id/search?name=' + nameq);

    xhr.onload = function (e) {
        e.preventDefault();
        var show = document.getElementById("get");

        var out = this.responseText;

        var output ;

        for (var i in out) {    
           
            output += '<ul>' +
                '<li>Name: ' + out[i].name + '</li>' +
                '<li>Email: ' + out[i].email + '</li>' +
                '<li>Destination: ' + out[i].destination + '</li>' +
                '<li>Location: ' + out[i].location + '</li>' +
                '<li>Status: ' + 'in progress' + '</li>' +
                '<li>id: '+out[i]._id+'</li>'+
                '<form action="https://web-app-senditb.herokuapp.com/parcel/'+out[i]._id+'/cancel" id="ourForm" method="DELETE" >' +

                '<button id="btn" type="submit"> Delete </button>' +
 
                '</form>' +
                `
            
                <a href="destination.html">update destination   </a>
                `+


                '</ul>'

*/







