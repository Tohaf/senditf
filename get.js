document.getElementById('show').style.display = 'none';
document.getElementById('myDestination').style.display = 'none';
document.getElementById('order').innerHTML = '0';



function getAllParcel() {

    var nameq = localStorage.getItem('value');
    var status = localStorage.getItem('status');
    document.getElementById('display').innerHTML = 'WELCOME ' + nameq;

    console.log(nameq);

    fetch('https://web-app-senditb.herokuapp.com/parcel/:id/search?name=' + nameq)
        .then(response => response.json())
        .then((out) => {
            var trans = document.getElementById('transit');
            var deli = document.getElementById('deliver');

            const deliver = out.filter((item) => {
                return item.status === 'delivered';
            })
            deli.innerHTML = deliver.length;

            const transit = out.filter((item) => {
                return item.status === 'transit';
            })
            trans.innerHTML = transit.length;

            for (var i in out) {

                var output;
                output += '<ul>' +
                    '<li>' + out[i].status + '</li>' +
                    '</ul>'


                var table = document.getElementById("head").getElementsByTagName("tbody")[0];
                var newRow = table.insertRow(table.length);
                cell1 = newRow.insertCell(0);
                cell1.innerHTML = `${out[i]._id}`;
                cell2 = newRow.insertCell(1);
                cell2.innerHTML = `${out[i].destination}`;
                cell3 = newRow.insertCell(2);
                cell3.innerHTML = `${out[i].location}`;
                cell4 = newRow.insertCell(3);
                cell4.innerHTML = `${out[i].recipient}`;
                cell5 = newRow.insertCell(4);
                cell5.innerHTML = `${out[i].phone}`;
                cell6 = newRow.insertCell(5);
                cell6.innerHTML = `${out[i].status}`;
                cell7 = newRow.insertCell(6);
                cell7.innerHTML = `<a id="chec" onClick="updateDestination(this)">Update Destination</a>`;
                cell8 = newRow.insertCell(7);
                cell8.innerHTML = `<button onClick="cancelData(this)">Cancel</button>`;


                var row = table.rows.length;
                document.getElementById('order').innerHTML = row;


            }

        })
}




function updateDestination(td) {
    row = td.parentElement.parentElement;
    var mart = row.cells[0].innerHTML;
    var id = mart;
    localStorage.setItem('idd', id);

    var des = row.cells[5].innerHTML;
    localStorage.setItem('dest', des);

    if (des == 'cancelled' || des === 'delivered') {
        alert('destination cannot be updated, order already cancelled/delivered');
    }
    else {
        var destination = prompt("enter new destination: ");

        var params = JSON.stringify({

            "destination": destination,
            "id": id
        });

        var val = params;
        
        const XHR = new XMLHttpRequest();

        XHR.open('PUT', 'https://web-app-senditb.herokuapp.com/parcel/' + id + '/destination', true);

        XHR.onload = function () {

            var out1 = this.responseText;

            window.location.reload();

            console.log(out1);

        };


        XHR.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        XHR.setRequestHeader('Method', 'PUT');


        XHR.send(val);
    }


        
    
/*

    if (des == 'ready for pickup' || des === 'transit') {

        document.getElementById('myDestination').style.display = 'block';

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

            XHR.open('PUT', 'http://localhost:5000/parcel/' + id + '/destination', true);

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
*/

}




function cancelData(td) {

    row = td.parentElement.parentElement;

    var mart = row.cells[0].innerHTML;
    var id = mart

    console.log(mart);

    var status = 'cancelled';


    if (row.cells[5].innerHTML == 'delivered' || row.cells[5].innerHTML === 'cancelled') {
        alert("order already delivered/cancelled");

    } else if (confirm("are you sure you want to cancel") == false) {
        window.document.location = 'get.html'
    } else {
        var params = JSON.stringify({

            "status": status,
            "id": id

        });

        var val = params;

        if (row.cells[5].innerHTML == 'ready for pickup' || row.cells[5].innerHTML === 'transit') {

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
        else if (row.cells[5].innerHTML === 'delivered') {
            alert('cannot cancel order as its already delivered/cancelled');
            window.document.location = 'get.html';
        } else {
            alert('cannot cancel order as its already delivered/cancelled');
            window.document.location = 'get.html';
        }
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







