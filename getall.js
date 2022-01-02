var form = document.getElementById('getForm');

form.addEventListener('submit', getAllParcel);

function getAllParcel (e) {
    e.preventDefault();

    fetch(" https://web-app-senditb.herokuapp.com/parcel/getall").then(response => response.json()).then(data => {
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




