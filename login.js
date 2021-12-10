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

        XHR.open('POST', 'https://web-app-senditb.herokuapp.com/register/login', true);
        XHR.setRequestHeader('Content-type', 'appliction/json; charset=utf-8');
        XHR.setRequestHeader('authorisation',   'Bearer ' + username.accessToken);


        XHR.onload = function () {
            var output = this.responseText;

            var display = document.getElementById('dis');
            
           console.log(output);

           window.document.location = "post.html"
    

        };

        XHR.send(val);

    }


});






