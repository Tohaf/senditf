var selectedRow = null;

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
            cell4.innerHTML = `${out[i].status}`;
            cell5 = newRow.insertCell(4);
            cell5.innerHTML = `<a  href="status.html" id="chec" onClick="updateStatus(this)">Update Status</a>`;
            cell6 = newRow.insertCell(5);
            cell6.innerHTML = `<button onClick="deleteData(this)">Delete</button>`;

        }

    })
}    

function updateStatus(td){
    row = td.parentElement.parentElement;

    var mart =  row.cells[0].innerHTML;
    var id = mart ;
    localStorage.setItem('ids', id);

}

function deleteData(td) {
    row = td.parentElement.parentElement;

    var mart =  row.cells[0].innerHTML;
    var id = mart 

    console.log(mart);
    
   
    var xhr = new XMLHttpRequest();

    xhr.open('DELETE', `https://web-app-senditb.herokuapp.com/parcel/${id}/cancel`);

    xhr.addEventListener('load', function () {
        
        console.log('sucessful');
        alert('sucesfully deleted');
    });

    xhr.addEventListener('error', function () {
        console.log('error deleting message');
    });

    xhr.setRequestHeader('Content-Type', 'application/json;charset=utf-8');

    
    xhr.send();
    
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