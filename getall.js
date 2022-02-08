document.getElementById('sow').style.display = 'none';
document.getElementById('myStatus').style.display = 'none';


function getAllParcel() {

    fetch('https://web-app-senditb.herokuapp.com/parcel/getall')
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
                cell4.innerHTML = `${out[i].phone}`;

                cell5 = newRow.insertCell(4);
                cell5.innerHTML = `${out[i].recipient}`;

                cell6 = newRow.insertCell(5);
                cell6.innerHTML = `${out[i].status}`;

                cell7 = newRow.insertCell(6);
                cell7.innerHTML = `<a id="chec" onClick="updateStatus(this)">Update Status</a>`;
                cell8 = newRow.insertCell(7);
                cell8.innerHTML = `<button onClick="deleteData(this)">Delete</button>`;

            }

        })
}

function updateStatus(td) {
    row = td.parentElement.parentElement;

    var mart = row.cells[0].innerHTML;
    var id = mart;

    var stat = row.cells[5].innerHTML

    if (stat == 'ready for pickup' || stat === 'transit') {
        window.scrollTo({TOP: 0, behavior: 'smooth'});

        document.getElementById('myStatus').style.display = 'block';
        document.getElementById('sow').style.display = 'block';

        var form = document.getElementById('myStatus');

        form.addEventListener('submit', sendData);

        function sendData(e) {
            e.preventDefault();

            var status = document.getElementById('status').value;

            var params = JSON.stringify({

                "status": status,
                "id": id

            });

            var val = params;

            const XHR = new XMLHttpRequest();

            XHR.open('PUT', 'https://web-app-senditb.herokuapp.com/parcel/' + id + '/status', true);
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

    }
    else if (stat === 'delivered') {
        alert('cannot update status as its already delivered/cancelled');
        window.document.location = 'getall.html';
    }
    else {
        alert('cannot update status as its already cancelled/delivered');
        window.document.location = 'getall.html';
    }

}



function deleteData(td) {
    row = td.parentElement.parentElement;

    var mart = row.cells[0].innerHTML;
    var id = mart

    console.log(mart);

    if (row.cells[5].innerHTML == 'transit' || row.cells[5].innerHTML === 'ready for pickup') {
        alert('cannot be deleted, Order still in transit and not yet delivered');
    } else if (confirm("are you sure you want to delete") == false) {
        window.document.location = 'getall.html';
    } else {

        var xhr = new XMLHttpRequest();

        xhr.open('DELETE', `https://web-app-senditb.herokuapp.com/parcel/${id}/cancel`);

        xhr.addEventListener('load', function () {

            window.location.reload();
            console.log('sucessful');

        });

        xhr.addEventListener('error', function () {
            console.log('error deleting message');
        });

        xhr.setRequestHeader('Content-Type', 'application/json;charset=utf-8');


        xhr.send();
    }


}







/*


var form = document.getElementById('getForm');

form.addEventListener('submit', getAllParcel);

function getAllParcel (e) {
    e.preventDefault();

    fetch(" http://localhost:5000/parcel/getall").then(response => response.json()).then(data => {
        var output ;
        for (var i in data){
            output += '<ul>' +
            '<li>Name: '+data[i].name+'</li>'+
            '<li>Destination: '+data[i].destination+'</li>'+
            '<li>Location: '+data[i].location+'</li>'+
            '<li>Status: '+data[i].status+'</li>'+
            '<li>Email: '+data[i].email+'</li>'+
            '<li>id: '+data[i]._id+'</li>'+

            '<form action="https://web-app-senditb.herokuapp.com/parcel/'+data[i]._id+'/cancel" id="ourForm" method="DELETE" >'+

                '<button id="btn" type="submit"> Delete </button>'+
               
    
            '</form>'+
            `
            <a href="status.html">update Status   </a>
            <br>
            <a href="location.html">update location   </a>
            `+
           
            

            '</ul>'
        
        }   

        let net = output;

        var display = document.getElementById('list');

        display.innerHTML = net;

        console.log(net);

               
       
    });

}





   var table = document.getElementById("head").getElementsByTagName("tbody")[0];
            var newRow = table.insertRow(table.length);
            cell1 = newRow.insertCell(0);
            cell1.innerHTML = `${data._id}`;
            cell2 = newRow.insertCell(1);
            cell2.innerHTML = `${data.destination}`;
            cell3 = newRow.insertCell(2);
            cell3.innerHTML = `${data.location}`;
            cell4 = newRow.insertCell(3);
            cell4.innerHTML = "in transit";
            cell5 = newRow.insertCell(4);
            cell5.innerHTML = `<a href="destination.html">Edit</a>`;
            cell6 = newRow.insertCell(5);
            cell6.innerHTML = `
                    <a onClick="onDelete(this)">Delete</a>`;
*/