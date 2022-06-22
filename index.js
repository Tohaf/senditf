var time = setInterval(() => {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    let day = "AM";
    if (hours > 12) {
        hours = hours - 12;
        day = 'PM'
    }
    if (hours < 10) {
        hours = '0' + hours;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    document.getElementById('today').textContent = hours + ":" + minutes + ":" + seconds + ":" + day;


})

var value = document.getElementById('text');
var gist = ["You are welcome to our website", "We offer the best service ever", "A trier will confuse you", "Always stay tune for the latest"];
var counter = 0;

function text(){
    if(counter >= gist.length){
        counter = 0;
    }
    value.textContent = gist[counter];
    counter++;
}
setInterval(text, 2000);

/*
var form = document.getElementById('getForm');

form.addEventListener('submit', getAllParcel);

function getAllParcel(e) {
    e.preventDefault();

    fetch(" https://web-app-senditb.herokuapp.com/parcel/getall").then(response => response.json()).then(data => {
        var output;
        for (var i in data) {
            output += '<ul>' +
                '<li>username: ' + data[i].name + '</li>' +
                '<li>password: ' + data[i].password + '</li>' +
                '<li>Email: ' + data[i].email + '</li>' +
                '<li>Destination: ' + data[i].destination + '</li>' +
                '<li>Location: ' + data[i].location + '</li>' +
                '<li>Status: ' + data[i].status + '</li>' +
                '<li>id: ' + data[i]._id + '</li>' +

                '<form action=" https://web-app-senditb.herokuapp.com/parcel/' + data[i]._id + '/cancel" id="ourForm" method="DELETE" >' +

                '<button id="btn" type="submit"> Delete </button>' +


                '</form>' +
                `
            <a href="location.html">update location   </a>
            <br>
            <a href="destination.html">update destination   </a>
            `+



                '</ul>'

        }

        let net = output;

        var display = document.getElementById('list');

        display.innerHTML = net;

        console.log(net);



    });

}

var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    document.getElementById('today').textContent = hours + ":" + minutes + ":" + seconds;

setInterval(() => {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    document.getElementById('today').textContent = hours + ":" + minutes + ":" + seconds;

})
*/