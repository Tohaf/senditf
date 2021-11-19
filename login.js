window.addEventListener('load', function () {

    var form = document.getElementById('myForm');

    form.addEventListener('submit', sendData);

    function sendData(e) {
        e.preventDefault();
       
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;


        var params = JSON.stringify({
            
            "password": password,
            "username": username
           
        });

        var val = params;

        const XHR = new XMLHttpRequest();

        XHR.open('POST', ' https://web-app-senditb.herokuapp.com/register/login', true);

        XHR.onload = function () {
            var output = this.responseText;

            var display = document.getElementById('dis');
            
            display.innerHTML = `
            <br>
            <div> ${output} </div> 
            <br>
            <h3> welcome  ${username}  to our parcel delivery website </h3>
            
            `
            window.document.location = "insert.html"
            console.table(output);

        };


        XHR.setRequestHeader('Content-type', 'appliction/json; charset=utf-8');


        XHR.send(val);

        

    }


});






