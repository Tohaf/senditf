
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
                cell5.innerHTML = `<a  href="destination.html" id="chec" onClick="updateDestination(this)">Update Destination</a>`;
                cell6 = newRow.insertCell(5);
                cell6.innerHTML = `<button onClick="deleteData(this)">Delete</button>`;


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

}


function deleteData(td) {
    row = td.parentElement.parentElement;

    var mart = row.cells[0].innerHTML;
    var id = mart

    console.log(mart);



    var xhr = new XMLHttpRequest();

    xhr.open('DELETE', `https://web-app-senditb.herokuapp.com/parcel/${id}/cancel`);

    xhr.addEventListener('load', function () {

        alert('sucessfully deleted');
    });

    xhr.addEventListener('error', function () {
        console.log('error deleting message');
    });

    xhr.setRequestHeader('Content-Type', 'application/json;charset=utf-8');


    xhr.send();

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







