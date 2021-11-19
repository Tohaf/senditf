document.getElementById("myForm").addEventListener('submit', getAllParcel);

function getAllParcel(e) {
    e.preventDefault();

    var val = document.getElementById("myName").value;

    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'http://localhost:5000/parcel/:id/search?name=' + val);

    xhr.onload = function () {

        var show = document.getElementById("get");

        var out = JSON.parse(this.responseText);

        var output ;

        for (var i in out) {
           
            output += '<ul>' +
                '<li>username: ' + out[i].name + '</li>' +
                '<li>password: ' + out[i].password + '</li>' +
                '<li>Email: ' + out[i].email + '</li>' +
                '<li>Destination: ' + out[i].destination + '</li>' +
                '<li>Location: ' + out[i].location + '</li>' +
                '<li>Status: ' + out[i].status + '</li>' +
                '<li>id: '+out[i]._id+'</li>'+
                '<form action=" https://web-app-senditb.herokuapp.com/parcel/'+out[i]._id+'/cancel" id="ourForm" method="DELETE" >' +

                '<button id="btn" type="submit"> Delete </button>' +
 
                '</form>' +
                `
            
                <a href="destination.html">update destination   </a>
                `+


                '</ul>'


        }

       

        let net = output;

        show.innerHTML = net;

        console.log(net);

    }


    xhr.send();



}




