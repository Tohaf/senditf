

    var form = document.getElementById('myForm');

    form.addEventListener('submit', sendData);

    function sendData(e) {
        e.preventDefault();
       
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;

        var params = JSON.stringify({
            
            "password": password,
            "email": email
           
        });

        const result = fetch('https://web-app-senditb.herokuapp.com/api/v1/auth/login', {
            method: 'POST',
            body: (params),
            headers:{
                'Content-Type': 'application/json'
            }
        }).then( response => response.json())

        .then((data) => {
            const deta = document.getElementById('dis');

            if (data.status === 'error') {
                deta.innerHTML = 'Invalid Email/password';
            } else if(email === 'lmn@gmail.com' && password === 'toheeb'){
              window.document.location= 'getall.html';

            }else{
                
                window.document.location = 'get.html';
                
                console.log(data.token);
                localStorage.setItem('value', data.nama);
                localStorage.setItem('token', data.token);
                localStorage.setItem('mail', email);
                /*
                localStorage.setItem('token', JSON.stringify(data));
                */
            }    
        });
   
    }





