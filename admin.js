window.addEventListener('load', function () {

    var form = document.getElementById('myAdmin');

    form.addEventListener('submit', sendData);

    function sendData(e) {
        e.preventDefault();
       
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;


        var params = JSON.stringify({
            
            "password": password,
            "email": email
           
        });

        var val = params;

        const XHR = new XMLHttpRequest();

        XHR.open('POST', ' https://web-app-senditb.herokuapp.com/admin/add', true);
        
        if (email == 'w@gmail.com' && password === 'toye'){
    
            XHR.onload = function (e) {
                e.preventDefault();
                var output = this.responseText;
    
                
                console.log(output)

                window.document.location = "getall.html"
    
    
            }
    

        }else{
            var display = document.getElementById('dis');

            display.innerHTML = "username or password not correct"
                
            console.log('failed password or username')
        }

        XHR.send(val);

    }


});






