

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

        const result = fetch('http://localhost:5000/admin/login', {
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
                
                window.document.location = 'post.html';
                
                console.log(data);
                localStorage.setItem('token', JSON.stringify(data));
                
            }    
        });
   
    }





